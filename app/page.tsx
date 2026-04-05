import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechPhilosophy } from "@/components/sections/tech-philosophy";
import { EliteSkills } from "@/components/sections/elite-skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { DeveloperTimeline } from "@/components/sections/developer-timeline";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/animations/reveal";

export default function Home() {
return (
  <>
    <Navbar />
    <main>
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal delay={0.1}>
        <TechPhilosophy />
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
