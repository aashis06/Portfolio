"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const sections = ["overview", "challenge", "solution", "architecture", "tech-stack", "outcome"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    notFound();
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "solution", label: "Solution" },
    { id: "architecture", label: "Architecture" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "outcome", label: "Outcome" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border/20 z-50">
        <div
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-12">
            {/* Sticky Sidebar Navigation - Desktop Only */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 space-y-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  Contents
                </p>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                      activeSection === item.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Back Button */}
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>

              {/* Header - Overview Section */}
              <section id="overview" className="scroll-mt-24 mb-16">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                    {project.title}
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.demo && (
                      <Button asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <GitBranch className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Hero Image */}
                {project.image ? (
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/60 bg-gradient-to-br from-primary/10 via-primary/5 to-background mt-12">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/60 bg-gradient-to-br from-primary/10 via-primary/5 to-background mt-12 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <div className="text-8xl font-bold text-muted-foreground/20">
                        {project.title.charAt(0)}
                      </div>
                      <p className="text-sm text-muted-foreground/60">Project Preview</p>
                    </div>
                  </div>
                )}
              </section>

              {/* Project Impact Metrics */}
              {project.metrics && (
                <section className="mb-20">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Impact</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="p-6 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm"
                      >
                        <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Challenge */}
              <section id="challenge" className="scroll-mt-24 mb-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
              </section>

              {/* Solution */}
              <section id="solution" className="scroll-mt-24 mb-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
              </section>

              {/* Architecture */}
              {project.architecture && (
                <section id="architecture" className="scroll-mt-24 mb-20">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8">Architecture</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-border/60 bg-card/30">
                      <h3 className="font-semibold mb-4 text-primary">Frontend</h3>
                      <ul className="space-y-2">
                        {project.architecture.frontend.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-border/60 bg-card/30">
                      <h3 className="font-semibold mb-4 text-primary">Backend</h3>
                      <ul className="space-y-2">
                        {project.architecture.backend.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-border/60 bg-card/30">
                      <h3 className="font-semibold mb-4 text-primary">Database</h3>
                      <ul className="space-y-2">
                        {project.architecture.database.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-border/60 bg-card/30">
                      <h3 className="font-semibold mb-4 text-primary">Integrations</h3>
                      <ul className="space-y-2">
                        {project.architecture.integrations.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              )}

              {/* Tech Stack */}
              <section id="tech-stack" className="scroll-mt-24 mb-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Tech Stack</h2>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>

              {/* Outcome */}
              <section id="outcome" className="scroll-mt-24 mb-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Outcome</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.result}</p>
              </section>

              {/* Final CTA */}
              <section className="mt-24 pt-12 border-t border-border/60">
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold">Let's Build Something Together</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Interested in working together or learning more about this project? I'd love to
                    hear from you.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center pt-4">
                    <Button asChild size="lg">
                      <Link href="/#contact">Get in Touch</Link>
                    </Button>
                    <Button variant="outline" asChild size="lg">
                      <Link href="/#projects">View More Projects</Link>
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
