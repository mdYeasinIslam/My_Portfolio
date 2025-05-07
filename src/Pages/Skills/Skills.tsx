import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Web");

  const categories = ["Web", "Programming", "Component_UI", "Tools"];
  const skills:any = {
    Web: [
      { name: "HTML & CSS", level: 60 },
      { name: "Tailwind CSS", level: 80 },
      { name: "React", level: 60 },
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
      { name: "Figma", level: 55 }
    ],
    Component_UI: [
      { name: "Daysi UI", level: 90 },
      { name: "Meterial UI", level: 55 },
      { name: "Shadcn UI", level: 60 }
    ],
  };

  return (
    <section id="Skill" className=" bg-gray-900 text-white py-6 md:py-10 bg-gradient-to-l  from-black to-gray-900 ">
          {/* Tabs */}
    <div className="container mx-auto">
                     <h1 className="text-xl md:text-2xl font-medium uppercase ">My Skills -----------</h1>
            <div className="grid md:flex gap-5 my-6">
                {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 border ${
                    activeCategory === category
                        ? "bg-[#0d145c] text-white"
                        : "bg-transparent text-white"
                    } rounded transition duration-300 hover:bg-[#0d145c]`}
                >
                    {category}
                </button>
                ))}
            </div>

            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills[activeCategory].map((skill:any, index:number) => (
                <div
                    key={index}
                    className="bg-gray-800 p-4 rounded shadow-md flex flex-col"
                >
                    <span className="text-lg font-bold mb-2">{skill.name}</span>
                    <div className="w-full bg-gray-700 h-2 rounded overflow-hidden">
                    <div
                        className="bg-blue-500 h-full"
                        style={{ width: `${skill.level}%` }}
                    ></div>
                    </div>
                </div>
                ))}
            </div>
     </div>
    </section>
  );
};

export default Skills;

