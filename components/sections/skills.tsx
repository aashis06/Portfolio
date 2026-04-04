"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Wrench } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: Code,
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    title: "Backend Development",
    icon: Server,
    tech: ["Node.js", "Express", "REST APIs", "JWT Auth", "MVC"],
  },
  {
    title: "Database",
    icon: Database,
    tech: ["MongoDB", "PostgreSQL", "Prisma", "Mongoose"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    tech: ["Git", "Docker", "Vercel", "Postman", "CI/CD"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-muted-foreground mb-2">
            Skills & Expertise
          </p>

          <h2 className="text-5xl font-bold">
            Technologies I work with.
          </h2>

          <p className="mt-4 text-muted-foreground">
            Building scalable products using modern tools and clean engineering practices.
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                className="
                group relative
                rounded-3xl
                border
                bg-background/60
                backdrop-blur-xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
              >
                {/* Gradient Hover Glow */}
                <div className="
                  absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition duration-300
                  bg-gradient-to-br from-primary/10 via-transparent to-primary/10
                " />

                <Icon className="w-7 h-7 mb-6 text-primary" />

                <h3 className="font-semibold text-lg mb-6">
                  {skill.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                      text-xs
                      px-3 py-1.5
                      rounded-full
                      bg-muted/70
                      backdrop-blur
                      border
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}