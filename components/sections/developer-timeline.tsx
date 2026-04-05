"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

const timelineData = [
  {
    year: "2022",
    title: "Started Web Development",
    description:
      "Began my journey into web development, learning the fundamentals and building my first projects.",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    year: "2023",
    title: "Full Stack Foundations",
    description:
      "Expanded into full-stack development, building complete applications with modern frameworks and databases.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
  },
  {
    year: "2024",
    title: "Modern Frontend Engineering",
    description:
      "Adopted modern frontend technologies and best practices, focusing on performance and user experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Authentication"],
  },
  {
    year: "2025",
    title: "Production Systems",
    description:
      "Developed production-ready systems including CMS platforms, dashboards, and scalable backend APIs.",
    technologies: ["Headless CMS", "PostgreSQL", "Redis", "Docker", "CI/CD"],
  },
  {
    year: "2026",
    title: "Full Stack Product Engineer",
    description:
      "Focused on building real-world products with emphasis on architecture, scalability, and performance optimization.",
    technologies: ["System Design", "Microservices", "Cloud Infrastructure", "Performance"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function DeveloperTimeline() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-sm font-medium text-primary tracking-wide mb-3">
              Journey
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Developer Timeline
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey of continuous learning, building, and growing as a developer.
            </p>
          </div>

          {/* Timeline */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((entry, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Left Side (Desktop) */}
                  <div
                    className={`${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"
                    }`}
                  >
                    <div className="inline-block md:block">
                      <div className="text-sm font-semibold text-primary mb-2">
                        {entry.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{entry.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {entry.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {entry.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full border bg-background/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
                  </div>

                  {/* Right Side (Desktop) - Empty for spacing */}
                  <div className={`${index % 2 === 0 ? "md:order-2" : ""} hidden md:block`} />

                  {/* Mobile Indicator */}
                  <div className="absolute left-0 top-0 md:hidden">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
