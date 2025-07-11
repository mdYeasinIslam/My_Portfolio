import { About } from "@/components/About/About";
import Contact from "@/components/ContactSection/Contact";
import { Education } from "@/components/Education/Education";
import Hobby from "@/components/Hobby/Hobby";
import HeroBanner from "@/components/Home/Banner/HeroBanner";
import Projects from "@/components/Pojects/Projects";
import Skills from "@/components/Skills/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohammad Yeasin | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Mohammad Yeasin, skilled in React, Next.js, TypeScript and Tailwind CSS. Explore high-quality frontend projects."
        />
        <meta
          name="keywords"
          content="Frontend Developer, React, Next.js, TypeScript, Tailwind CSS, Portfolio"
        />
        <meta name="author" content="Mohammad Yeasin" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>
      <main className="text-xl">
        {/* <Banner /> */}
        <HeroBanner />
        <About />
        <Education />
        <Hobby />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
