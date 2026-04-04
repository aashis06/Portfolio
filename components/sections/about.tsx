"use client";

import { Container } from "@/components/layout/container";
import { Code2, Database, Layout, Server } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Developer",
  },
  {
    icon: Layout,
    title: "MERN & Next.js Specialist",
  },
  {
    icon: Server,
    title: "REST API & Backend Systems",
  },
  {
    icon: Database,
    title: "Modern UI Engineering",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-medium text-primary tracking-wide">
                About Me
              </p>
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Building scalable digital products.
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-muted-foreground/90 leading-relaxed max-w-xl">
              <p>
                I'm a <span className="font-semibold text-foreground">Full Stack Developer</span> passionate about creating exceptional
                web experiences. I specialize in building <span className="font-semibold text-foreground">modern</span>, <span className="font-semibold text-foreground">scalable</span>, and{" "}
                <span className="font-semibold text-foreground">high-performance</span> applications using cutting-edge technologies.
              </p>
              <p>
                With expertise in <span className="font-semibold text-foreground">Next.js</span>, <span className="font-semibold text-foreground">Node.js</span>, and the <span className="font-semibold text-foreground">MERN</span> stack, I
                focus on delivering solutions with clean
                architecture and intuitive user interfaces.
              </p>
              <p>
                My approach combines technical excellence with user-centered
                design, ensuring every project not only works flawlessly but
                also provides an outstanding experience.
              </p>
            </div>
          </div>

          {/* Right Side - Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <item.icon className="w-6 h-6 mb-4 text-primary" />
                <h3 className="text-base font-semibold leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
