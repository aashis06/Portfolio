"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeader } from "@/components/layout/section-header";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Layout,
} from "lucide-react";

const skillDomains = [
  {
    title: "Frontend Engineering",
    icon: Layout,
    skills: [
      {
        name: "Next.js",
        description: "Server-side rendering, static generation, and API routes",
        proficiency: "Expert",
      },
      {
        name: "React",
        description: "Component architecture, hooks, and state management",
        proficiency: "Expert",
      },
      {
        name: "TypeScript",
        description: "Type-safe development and advanced patterns",
        proficiency: "Advanced",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling and responsive design",
        proficiency: "Expert",
      },
    ],
  },
  {
    title: "Backend Systems",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        description: "RESTful APIs, authentication, and server logic",
        proficiency: "Advanced",
      },
      {
        name: "Express",
        description: "Middleware, routing, and API architecture",
        proficiency: "Advanced",
      },
      {
        name: "Django",
        description: "Python web framework and ORM",
        proficiency: "Intermediate",
      },
      {
        name: "REST APIs",
        description: "API design, documentation, and best practices",
        proficiency: "Expert",
      },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      {
        name: "MongoDB",
        description: "NoSQL database design and aggregation",
        proficiency: "Advanced",
      },
      {
        name: "PostgreSQL",
        description: "Relational database design and optimization",
        proficiency: "Advanced",
      },
      {
        name: "MySQL",
        description: "Database management and query optimization",
        proficiency: "Intermediate",
      },
      {
        name: "Redis",
        description: "Caching strategies and session management",
        proficiency: "Intermediate",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    skills: [
      {
        name: "Git",
        description: "Version control and collaboration workflows",
        proficiency: "Expert",
      },
      {
        name: "Docker",
        description: "Containerization and deployment",
        proficiency: "Intermediate",
      },
      {
        name: "CI/CD",
        description: "Automated testing and deployment pipelines",
        proficiency: "Intermediate",
      },
      {
        name: "Vercel/Netlify",
        description: "Modern deployment platforms",
        proficiency: "Advanced",
      },
    ],
  },
];

const proficiencyColors = {
  Expert: "bg-green-500/10 text-green-500 border-green-500/20",
  Advanced: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  Beginner: "bg-gray-500/10 text-gray-500 border-gray-500/20",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function EliteSkills() {
  return (
    <SectionContainer id="skills" className="bg-gradient-to-b from-background to-muted/30">
      <SectionHeader
        label="Technical Expertise"
        title="Engineering Skills"
        subtitle="Building modern web applications with a focus on performance, scalability, and user experience."
        align="left"
      />

          {/* Primary Engineering Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 p-8 rounded-2xl border-2 border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Primary Engineering Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full Stack development using <span className="font-semibold text-foreground">MERN stack</span> and{" "}
                  <span className="font-semibold text-foreground">Next.js</span>, building scalable APIs, modern frontend
                  architecture, and production-ready applications with emphasis on performance and clean code.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {skillDomains.map((domain, domainIndex) => (
              <motion.div
                key={domainIndex}
                variants={item}
                className="group p-8 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Domain Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <domain.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{domain.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {domain.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-sm">{skill.name}</h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full border ${
                            proficiencyColors[
                              skill.proficiency as keyof typeof proficiencyColors
                            ]
                          }`}
                        >
                          {skill.proficiency}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
    </SectionContainer>
  );
}
