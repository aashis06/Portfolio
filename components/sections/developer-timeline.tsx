"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeader } from "@/components/layout/section-header";
import { BookOpen, Code, Rocket, TrendingUp } from "lucide-react";

const timelineData = [
  {
    year: "2022",
    title: "Learning Fundamentals",
    icon: BookOpen,
    points: [
      "Started with HTML, CSS, and JavaScript basics",
      "Built simple static websites and landing pages",
      "Learned PHP for basic backend functionality",
    ],
  },
  {
    year: "2023",
    title: "Frontend Development",
    icon: Code,
    points: [
      "Learned React and component-based architecture",
      "Started using Tailwind CSS for styling",
      "Built interactive user interfaces and SPAs",
      "Explored Node.js and Express for backend",
    ],
  },
  {
    year: "2024",
    title: "Full Stack Projects",
    icon: Rocket,
    points: [
      "Adopted Next.js for full-stack development",
      "Built complete MERN stack applications",
      "Implemented authentication and REST APIs",
      "Started working with MongoDB and PostgreSQL",
    ],
  },
  {
    year: "2025",
    title: "Real-World Experience",
    icon: TrendingUp,
    points: [
      "6-month internship at Sarbatra Inc",
      "Shipped production applications with real users",
      "Worked on CMS platforms and task management systems",
      "Learned team collaboration and code reviews",
    ],
  },
  {
    year: "2026",
    title: "Current Focus",
    icon: TrendingUp,
    points: [
      "Building scalable web applications",
      "Improving code quality and best practices",
      "Learning TypeScript and modern tooling",
      "Seeking full-time opportunities to grow further",
    ],
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function DeveloperTimeline() {
  return (
    <SectionContainer size="small" className="bg-gradient-to-b from-background to-muted/30">
      <SectionHeader
        label="Journey"
        title="My Development Journey"
        subtitle="From learning basics to building production applications—a realistic path of continuous growth"
      />

      {/* Timeline */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {/* Timeline Items */}
        <div className="space-y-8">
          {timelineData.map((entry, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative grid md:grid-cols-2 gap-8 items-start ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`pl-20 md:pl-0 ${
                  index % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"
                }`}
              >
                <div className="inline-block md:block">
                  <div className="text-sm font-bold text-primary mb-2">
                    {entry.year}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{entry.title}</h3>
                  <ul className={`space-y-2 text-sm text-muted-foreground ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}>
                    {entry.points.map((point, i) => (
                      <li key={i} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Icon Circle */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0">
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg">
                  <entry.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Right Side (Desktop) - Empty for spacing */}
              <div className={`${index % 2 === 0 ? "md:order-2" : ""} hidden md:block`} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
