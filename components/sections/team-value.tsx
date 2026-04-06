"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeader } from "@/components/layout/section-header";
import { Code, Zap, Users, Target, MessageSquare, Lightbulb } from "lucide-react";

const strengths = [
  {
    icon: Code,
    title: "Production-Ready Code",
    description: "I write code that works in production, not just on localhost. Clean, tested, and maintainable—ready for real users.",
  },
  {
    icon: Zap,
    title: "I Ship Fast",
    description: "No endless planning. I break down features, build iteratively, and deliver working software quickly without sacrificing quality.",
  },
  {
    icon: Target,
    title: "Problem Solver, Not Just Coder",
    description: "I don't just implement tickets. I understand the problem, propose solutions, and build features that create real business value.",
  },
  {
    icon: Users,
    title: "Easy to Work With",
    description: "I collaborate well with designers, PMs, and other developers. No ego, just focused on shipping great products together.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communicator",
    description: "I explain technical decisions clearly, write documentation that makes sense, and keep everyone in the loop.",
  },
  {
    icon: Lightbulb,
    title: "Always Learning",
    description: "Tech moves fast. I stay current, adapt quickly to new tools, and bring fresh ideas to the table.",
  },
];

export function TeamValue() {
  return (
    <SectionContainer className="bg-gradient-to-b from-background to-muted/30">
      <SectionHeader
        label="Why Hire Me"
        title="Why Work With Me"
        subtitle="What you get when you bring me onto your team"
        align="left"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strengths.map((strength, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
              <strength.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{strength.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {strength.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
