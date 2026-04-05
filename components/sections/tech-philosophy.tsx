"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Users, Zap, Layers, Rocket, BookOpen } from "lucide-react";

const philosophyPrinciples = [
  {
    title: "Build for Real Users",
    description:
      "Every technical decision should serve the end user. I prioritize performance, accessibility, and intuitive experiences over unnecessary complexity. Technology is a tool to solve real problems.",
    icon: Users,
  },
  {
    title: "Simplicity Over Complexity",
    description:
      "The best code is often the simplest. I favor clean, maintainable solutions that future developers can understand. Complexity should only exist when it solves a real problem.",
    icon: Layers,
  },
  {
    title: "Ship Fast, Improve Continuously",
    description:
      "Perfect is the enemy of good. I believe in iterative development—shipping working solutions quickly, gathering feedback, and improving based on real-world usage rather than assumptions.",
    icon: Rocket,
  },
  {
    title: "Strong Foundations Matter",
    description:
      "Scalable systems start with solid architecture. I invest time in understanding requirements, choosing the right tools, and building foundations that support growth without constant refactoring.",
    icon: Zap,
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves rapidly. I stay curious, experiment with new tools, and adapt my approach based on what works. Learning from both successes and failures makes me a better engineer.",
    icon: BookOpen,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function TechPhilosophy() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-primary tracking-wide mb-3">
              Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              My Engineering Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Building software is about more than writing code. It's about solving
              problems, making thoughtful decisions, and creating value. These
              principles guide how I approach every project.
            </p>
          </div>

          {/* Philosophy Principles */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {philosophyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group p-8 rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <principle.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
