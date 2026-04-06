import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { FloatingCTA } from "@/components/layout/floating-cta";
import { Reveal } from "@/components/animations/reveal";

// Lazy load non-critical sections
const About = dynamic(() => import("@/components/sections/about").then(mod => ({ default: mod.About })));
const TeamValue = dynamic(() => import("@/components/sections/team-value").then(mod => ({ default: mod.TeamValue })));
const EliteSkills = dynamic(() => import("@/components/sections/elite-skills").then(mod => ({ default: mod.EliteSkills })));
const Projects = dynamic(() => import("@/components/sections/projects").then(mod => ({ default: mod.Projects })));
const Experience = dynamic(() => import("@/components/sections/experience").then(mod => ({ default: mod.Experience })));
const DeveloperTimeline = dynamic(() => import("@/components/sections/developer-timeline").then(mod => ({ default: mod.DeveloperTimeline })));
const Contact = dynamic(() => import("@/components/sections/contact").then(mod => ({ default: mod.Contact })));
const Footer = dynamic(() => import("@/components/layout/footer").then(mod => ({ default: mod.Footer })));

export default function Home() {
return (
  <>
    <Navbar />
    <FloatingCTA />
    <main>
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal delay={0.1}>
        <TeamValue />
      </Reveal>
      <Reveal delay={0.1}>
        <EliteSkills />
      </Reveal>
      <Reveal delay={0.2}>
        <Projects />
      </Reveal>
      <Reveal delay={0.1}>
        <Experience />
      </Reveal>
      <Reveal delay={0.2}>
        <DeveloperTimeline />
      </Reveal>
      <Reveal delay={0.1}>
        <Contact />
      </Reveal>
      <Footer />
    </main>
  </>
);
}
