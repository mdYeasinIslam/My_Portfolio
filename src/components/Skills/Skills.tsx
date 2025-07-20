"use client";
import { useState } from "react";
import { BsStars } from "react-icons/bs";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Web");

  type Category = "Web" | "Programming" | "Component_UI" | "Tools";
  const categories: Category[] = [
    "Web",
    "Programming",
    "Component_UI",
    "Tools",
  ];
  type Skill = { name: string; level: number };
  type SkillsByCategory = {
    [key: string]: Skill[];
  };

  const skills: SkillsByCategory = {
    Web: [
      { name: "HTML & CSS", level: 60 },
      { name: "Tailwind CSS", level: 80 },
      { name: "React", level: 60 },
      { name: "Redux", level: 20 },
      { name: "Next.js", level: 30 },
      { name: "Node JS", level: 35 },
      { name: "Express JS", level: 35 },
      { name: "MongoDB", level: 30 },
    ],
    Programming: [
      { name: "JavaScript", level: 50 },
      { name: "TypeScript", level: 40 },
      { name: "C", level: 20 },
      { name: "C++", level: 25 },
    ],
    Tools: [
      { name: "Git", level: 45 },
      { name: "GitHub", level: 55 },
      { name: "Figma", level: 55 },
    ],
    Component_UI: [
      { name: "Daysi UI", level: 90 },
      { name: "Meterial UI", level: 55 },
      { name: "Shadcn UI", level: 60 },
    ],
  };

  return (
    <section
      id="Skill"
      className="   py-6 md:py-10 bg-gradient-to-r from-pink-100 via-blue-50 to-green-100  text-black "
    >
      {/* Tabs */}
      <div className="container mx-auto ">
        <h1 className="text-xl md:text-3xl font-medium flex items-center gap-2 uppercase py-3">
          <BsStars className="text-green-600" />
          <span>Skills </span>
          <span className="w-20 md:w-28 lg:w-40 border border-black"></span>
        </h1>
        <div className="grid md:flex gap-5 my-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 border  ${
                activeCategory === category
                  ? "bg-[#0d145c] text-white"
                  : "bg-transparent border-black hover:text-white text-black"
              } rounded transition duration-300 hover:bg-[#0d145c]`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills[activeCategory].map((skill: Skill, index: number) => <SkillsCard  key={index} skill={skill}/>)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
