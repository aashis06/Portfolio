"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeader } from "@/components/layout/section-header";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Sarbatra Inc Pvt Ltd",
    role: "Full Stack Developer Intern",
    duration: "December 2025 — March 2026",
    location: "Koteshwor, Kathmandu",
    type: "Internship",
    responsibilities: [
      "Developed 4 production applications including a Headless CMS platform, e-commerce store, SaaS task manager, and travel booking system using Next.js, TypeScript, and MongoDB",
      "Implemented secure authentication systems and role-based access control (RBAC) across multiple applications",
      "Built and documented RESTful APIs with Express.js, reducing API response time by optimizing database queries",
      "Secured applications against CSRF and injection attacks, wrote unit tests with Jest achieving 80%+ code coverage",
      "Collaborated with team using Git/GitHub, participated in code reviews, and maintained clean, documented codebases",
      "Integrated real-time features using Socket.io for live collaboration and notifications",
    ],
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
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export function Experience() {
  return (
    <SectionContainer id="experience" className="bg-gradient-to-b from-muted/30 to-background">
      <SectionHeader
        label="Career"
        title="Experience"
        subtitle="Professional journey and real-world development experience"
      />

          {/* Timeline */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden md:block" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 z-10 hidden md:block" />

                  {/* Card */}
                  <div className="md:ml-[calc(50%+2rem)] relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Main Card */}
                    <div className="relative group p-8 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-xl hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div className="flex items-start gap-4">
                          {/* Company Icon */}
                          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                            <p className="text-lg text-primary font-semibold">{exp.role}</p>
                          </div>
                        </div>

                        {/* Type Badge */}
                        <Badge
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-muted-foreground italic">
              "Continuously learning, building, and improving as a full-stack developer."
            </p>
          </motion.div>
    </SectionContainer>
  );
}
