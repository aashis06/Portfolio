"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-muted-foreground font-medium tracking-wide"
            >
              Hi, I'm Aashis
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Full Stack
              <br />
              Developer
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Building scalable web applications with Next.js, Node.js, and
              modern technologies. Focused on creating exceptional user
              experiences.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="text-base"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: -20,
                transition: { duration: 0.3 },
              }}
              className="relative w-full max-w-md"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-2xl blur-2xl" />

              {/* Glass Card */}
              <div className="relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl hover:shadow-primary/10 transition-shadow duration-500">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm font-medium text-muted-foreground mb-6"
                >
                  Tech Stack
                </motion.p>

                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.7,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-3 gap-3"
                >
                  {[
                    "Next.js",
                    "React",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "MySQL",
                    "TypeScript",
                    "Python",
                  ].map((tech) => (
                    <motion.div
                      key={tech}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-2 bg-background/80 border border-border/60 rounded-lg text-center text-sm font-medium hover:border-primary/50 hover:bg-background transition-all duration-300"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
