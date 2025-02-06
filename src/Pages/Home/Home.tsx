import { About } from "../About/About"
import Contact from "../ContactSection/Contact"
import { Education } from "../Education/Education"
import Hobby from "../Hobby/Hobby"
import Projects from "../Pojects/Projects"
import Skills from "../Skills/Skills"
import { Banner } from "./Banner/Banner"

export const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Education />
      <Hobby/>
      <Skills />
      <Projects />
      <Contact/>
    </div>
  )
}
