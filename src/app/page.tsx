import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { AICapabilities } from "@/components/portfolio/AICapabilities";
import { Certificates } from "@/components/portfolio/Certificates";
import { Services } from "@/components/portfolio/Services";
import { HowIWork } from "@/components/portfolio/HowIWork";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Awards } from "@/components/portfolio/Awards";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { FolioRuntime } from "@/components/portfolio/FolioRuntime";
import { Intro } from "@/components/portfolio/Intro";

export default function Home() {
  return (
    <>
      <Intro />
      <Nav />
      <Hero />
      <main>
        <About />
        <Skills />
        <AICapabilities />
      <Certificates />
        <Services />
        <HowIWork />
        <Work />
        <Experience />
        <Testimonials />
        <Awards />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FolioRuntime />
    </>
  );
}
