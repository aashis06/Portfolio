import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
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
        <Skills />
      </Reveal>
      <Reveal delay={0.2}>
        <Projects />
      </Reveal>
      <Reveal delay={0.1}>
        <Experience />
      </Reveal>
      <Reveal delay={0.2}>
        <Contact />
      </Reveal>
      <Footer />
    </main>
  </>
);
}
