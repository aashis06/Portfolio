"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { ArrowUp, Mail, GitBranch, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/aashis06",
    icon: GitBranch,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ashis-acharya-1499a12a2",
    icon: LinkIcon,
  },
  {
    name: "Email",
    href: "mailto:aashisacharya60@gmail.com",
    icon: Mail,
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/40 bg-gradient-to-b from-background to-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1 - Brand */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-1">Ashis Acharya</h3>
                <p className="text-sm text-primary font-medium">
                  Full Stack Developer
                </p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Passionate about building scalable web applications with clean code 
                and modern architecture. Ready to contribute to innovative teams.
              </p>
              <p className="text-xs text-muted-foreground/80 italic">
                Available for full-time opportunities
              </p>
            </div>

            {/* Column 2 - Navigation */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
                Tech Stack
              </h4>
              <ul className="space-y-3">
                {techStack.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Social Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
                Connect
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/40 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Ashis Acharya. All rights reserved.</p>
              <span className="hidden md:block">•</span>
              <p>Built with Next.js, TypeScript & Tailwind CSS</p>
              <span className="hidden md:block">•</span>
              <p>Deployed on Vercel</p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60 bg-card/30 hover:bg-card/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              aria-label="Scroll to top"
              suppressHydrationWarning
            >
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                Back to Top
              </span>
              <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 transition-all" />
            </button>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
