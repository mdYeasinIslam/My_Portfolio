import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Web");

  const categories = ["Web", "Programming", "Tools", "Others"];
  const skills:any = {
    Web: [
      { name: "HTML & CSS", level: 70 },
      { name: "Tailwind CSS", level: 70 },
      { name: "React", level: 60 },
      { name: "Node JS", level: 45 },
      { name: "Express JS", level: 45 },
      { name: "MongoDB", level: 30 },
    ],
    Programming: [
      { name: "JavaScript", level: 50 },
      { name: "TypeScript", level: 70 },
      { name: "C", level: 30 },
      { name: "C++", level: 40 },
    ],
    Tools: [
      { name: "Git", level: 75 }
    ],
    Others: [
      { name: "Figma", level: 75 },
      { name: "Daysi UI", level: 90 },
      { name: "Meterial UI", level: 55 },
    ],
  };

  return (
    <section id="Skill" className="bg-gray-900 text-white p-6 md:p-10">
          {/* Tabs */}
    <div className="container mx-auto">
                     <h1 className="text-xl md:text-2xl font-medium uppercase ">My Skills -----------</h1>
            <div className="flex space-x-4 mb-6">
                {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 border ${
                    activeCategory === category
                        ? "bg-green-600 text-white"
                        : "bg-transparent text-green-400"
                    } rounded transition duration-300`}
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
                        className="bg-green-500 h-full"
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

