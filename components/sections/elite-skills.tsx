"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeader } from "@/components/layout/section-header";

const techCategories = [
  {
    title: "Frontend",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "JavaScript",
      "Shadcn/ui",
    ],
  },
  {
    title: "Backend",
    technologies: [
      "Node.js",
      "Express",
      "Django",
      "REST API",
      "GraphQL",
      "JWT Auth",
    ],
  },
  {
    title: "Databases",
    technologies: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
  },
  {
    title: "DevOps & Tools",
    technologies: [
      "Git",
      "Vercel",
    ],
  },
  {
    title: "Testing",
    technologies: [
      "Jest",
      "Postman",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const techItemVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export function EliteSkills() {
  return (
    <SectionContainer id="skills" className="bg-gradient-to-b from-background via-muted/20 to-background">
      <SectionHeader
        label="Technology Stack"
        title="Engineering Toolbox"
        subtitle="Technologies I ship production-ready applications with"
        align="left"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/60 hover:border-primary/50 hover:bg-card/60 transition-all duration-300 overflow-hidden"
          >
            {/* Glassmorphism Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category Title */}
            <div className="relative z-10 mb-6">
              <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
              <div className="mt-2 h-1 w-12 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
            </div>

            {/* Technology Grid */}
            <motion.div
              variants={container}
              className="relative z-10 grid grid-cols-2 gap-3"
            >
              {category.technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  variants={techItemVariant}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="flex items-center justify-center px-3 py-2.5 rounded-lg bg-background/60 border border-border/40 hover:border-foreground/20 hover:bg-background/80 transition-all duration-200 cursor-default"
                >
                  <span className="text-sm font-medium text-foreground">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Subtle Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Continuously learning and adapting to new technologies while maintaining deep expertise in the MERN stack and Next.js ecosystem.
        </p>
      </motion.div>
    </SectionContainer>
  );
}
