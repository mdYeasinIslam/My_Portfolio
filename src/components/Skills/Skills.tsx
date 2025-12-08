"use client";
import { ReactNode, useState } from "react";
import { BsStars } from "react-icons/bs";
import SkillsCard from "./SkillsCard";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiAntdesign, SiC, SiCplusplus, SiExpress, SiFigma, SiGit, SiGithub, SiJavascript, SiMongodb, SiMui, SiNextdotjs, SiShadcnui, SiTypescript } from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Web");

  // type Category = "Web" | "Languages" | "Component_UI" | "Tools";
  const categories = ["Web", "Languages", "Component_UI", "Tools"];
  type Skill = { name: string; level: number; icon:ReactNode};
  type SkillsByCategory = {
    [key: string]: Skill[];
  };

  const skills: SkillsByCategory = {
    Web: [
      {
        name: "HTML & CSS",
        level: 60,
        icon: <FaHtml5 className="text-orange-500 " />,
      },
      {
        name: "Tailwind CSS",
        level: 80,
        icon: <RiTailwindCssFill className="text-blue-500 " />,
      },
      {
        name: "React",
        level: 60,
        icon: <FaReact className="text-blue-500 " />,
      },
      {
        name: "Redux",
        level: 20,
        icon: <TbBrandRedux className="text-violet-600 " />,
      },
      { name: "Next.js", level: 30, icon: <SiNextdotjs className="" /> },
      {
        name: "Node JS",
        level: 35,
        icon: <FaNodeJs className="text-lime-700 " />,
      },
      { name: "Express JS", level: 35, icon: <SiExpress className="" /> },
      {
        name: "MongoDB",
        level: 30,
        icon: <SiMongodb className="text-green-800 " />,
      },
    ],
    Languages: [
      {
        name: "JavaScript",
        level: 50,
        icon: <SiJavascript className="text-yellow-500" />,
      },
      {
        name: "TypeScript",
        level: 40,
        icon: <SiTypescript className="text-blue-800" />,
      },
      { name: "C", level: 20, icon: <SiC className="" /> },
      { name: "C++", level: 25, icon: <SiCplusplus className="" /> },
    ],
    Tools: [
      { name: "Git", level: 45, icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", level: 55, icon: <SiGithub className="" /> },
      { name: "Figma", level: 55, icon: <SiFigma className="text-blue-500" /> },
    ],
    Component_UI: [
      {
        name: "Ant Design",
        level: 90,
        icon: <SiAntdesign className="text-blue-600" />,
      },
      { name: "Shadcn UI", level: 60, icon: <SiShadcnui className="" /> },
      {
        name: "Material UI",
        level: 55,
        icon: <SiMui className="text-blue-600" />,
      },
    ],
  };

  return (
    <section
      id="Skill"
      className="   py-6 md:py-10 bg-gradient-to-r from-pink-50 via-blue-50 to-green-50  text-black "
    >
      {/* Tabs */}
      <div className="container mx-auto ">
        <h1 className="text-xl md:text-3xl font-semibold flex items-center gap-2 uppercase py-3">
          <BsStars className="text-green-600" />
          <span>Skills </span>
          <span className="w-20 md:w-28 lg:w-40 border border-black"></span>
        </h1>
        <div className="grid md:flex gap-5 my-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 border font-medium ${
                activeCategory === category
                  ? "bg-[#0d145c] text-white "
                  : "bg-transparent border-black hover:text-white text-black"
              } rounded transition duration-300 hover:bg-[#0d145c]`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills[activeCategory].map((skill: Skill, index: number) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
