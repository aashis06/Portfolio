"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeader } from "@/components/layout/section-header";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <SectionContainer id="projects">
      <SectionHeader
        label="Selected Work"
        title="Projects & Case Studies"
        subtitle="A collection of products I designed and developed across ecommerce, SaaS platforms, and real-world applications."
        align="left"
      />

        {/* Projects */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-24"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <Link href={`/projects/${project.slug}`} className="block group">
                <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-primary/5 to-background aspect-video cursor-pointer transition-all duration-300 hover:border-primary/30">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className="object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                      priority={index < 2}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center space-y-3">
                        <div className="text-7xl font-bold text-muted-foreground/20">
                          {project.title.charAt(0)}
                        </div>
                        <p className="text-sm text-muted-foreground/60">
                          Project Preview
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Link>

              {/* Content */}
              <div>
                <span className="text-sm text-primary font-medium">
                  {project.status}
                </span>

                <h3 className="text-3xl font-semibold mt-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mt-4">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full border bg-muted/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    View Case Study <ArrowRight size={16} />
                  </Link>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      GitHub <GitBranch size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
    </SectionContainer>
  );
}
