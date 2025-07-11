import { About } from "@/components/About/About";
import Contact from "@/components/ContactSection/Contact";
import { Education } from "@/components/Education/Education";
import Hobby from "@/components/Hobby/Hobby";
import { Banner } from "@/components/Home/Banner/Banner";
import HeroBanner from "@/components/Home/Banner/HeroBanner";
import Projects from "@/components/Pojects/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="text-xl">
          {/* <Banner /> */}
          <HeroBanner/>
      <About />
      <Education />
      <Hobby />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
