"use client";

import { motion } from "framer-motion";
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

const techStack = [
  { name: "Next.js", angle: 0, distance: 140 },
  { name: "Node", angle: 60, distance: 140 },
  { name: "Mongo", angle: 120, distance: 140 },
  { name: "Django", angle: 180, distance: 140 },
  { name: "PostgreSQL", angle: 240, distance: 140 },
  { name: "Tailwind", angle: 300, distance: 140 },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-primary font-semibold tracking-wide uppercase"
            >
              Full Stack Developer • MERN & Next.js
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            >
              I build products
              <br />
              teams rely on
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Production-ready web applications with clean code, scalable architecture, and real business impact. 
              From SaaS platforms to ecommerce systems—I ship features that work.
            </motion.p>

            {/* Proof Highlights */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-4 pt-2 max-w-xl"
            >
              <div className="text-center p-3 rounded-lg bg-card/50 border border-border/60">
                <p className="text-2xl font-bold text-foreground">4+</p>
                <p className="text-xs text-muted-foreground mt-1">Production Projects</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/50 border border-border/60">
                <p className="text-2xl font-bold text-foreground">1000+</p>
                <p className="text-xs text-muted-foreground mt-1">Daily Active Users</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/50 border border-border/60">
                <p className="text-2xl font-bold text-foreground">6mo</p>
                <p className="text-xs text-muted-foreground mt-1">Internship Experience</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="text-base group"
                asChild
              >
                <a href="#projects" className="relative overflow-hidden">
                  <span className="relative z-10">View Projects</span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base group"
                asChild
              >
                <a href="#contact">Let's Talk</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Tech Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center h-[500px]"
          >
            {/* Center Element */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-xl border border-primary/30 flex items-center justify-center shadow-2xl shadow-primary/20">
                <div className="text-center">
                  <p className="text-lg font-bold">Ashis</p>
                  <p className="text-xs text-muted-foreground">Acharya</p>
                </div>
              </div>
            </motion.div>

            {/* Orbiting Tech Stack */}
            {techStack.map((tech, index) => {
              const angleInRadians = (tech.angle * Math.PI) / 180;
              const x = Math.cos(angleInRadians) * tech.distance;
              const y = Math.sin(angleInRadians) * tech.distance;

              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: [x, x * 1.1, x],
                    y: [y, y * 1.1, y],
                  }}
                  transition={{
                    opacity: { delay: 0.5 + index * 0.1, duration: 0.5 },
                    scale: { delay: 0.5 + index * 0.1, duration: 0.5 },
                    x: {
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    y: {
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{ scale: 1.2, zIndex: 20 }}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                >
                  <div className="px-4 py-2 rounded-xl bg-card/80 backdrop-blur-xl border border-border/60 shadow-lg hover:border-primary/50 hover:shadow-primary/20 transition-all duration-300 cursor-default whitespace-nowrap">
                    <p className="text-sm font-medium">{tech.name}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Orbital Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-[320px] h-[320px] rounded-full border border-primary/10"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="w-[360px] h-[360px] rounded-full border border-primary/5"
              />
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
