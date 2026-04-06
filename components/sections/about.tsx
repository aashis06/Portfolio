"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeader } from "@/components/layout/section-header";
import { Code2, Database, Layout, Server } from "lucide-react";

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
    <SectionContainer id="about" className="bg-gradient-to-b from-background to-muted/30">
      <SectionHeader
        label="About Me"
        title="Hi, I'm Ashis"
        align="left"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6">
          <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
            I'm a developer who actually ships. Not just code—complete products that solve real problems and handle real users.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
            I specialize in the <span className="font-semibold text-foreground">MERN stack</span> and <span className="font-semibold text-foreground">Next.js</span>, building everything from 
            task management platforms to ecommerce systems. My code runs in production, serving 1000+ daily users.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
            What sets me apart? I write <span className="font-semibold text-foreground">clean, maintainable code</span>, communicate clearly with teams, 
            and focus on delivering features that create business value—not just checking boxes.
          </p>
          <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
            Currently seeking full-time opportunities where I can contribute to meaningful products and grow alongside talented teams.
          </p>
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
    </SectionContainer>
  );
}
