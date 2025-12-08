import React, { ReactNode } from "react";

interface PropType {
  skill: {
    name: string;
    level: number;
    icon: ReactNode;
  };
}

export default function SkillsCard({ skill }: PropType) {
  return (
    <div className="bg-white text-black p-4 rounded shadow-md flex items-center gap-2 hover:scale-105 duration-300 transition-transform bg-gradient-to-r from-green-50 to-[#FAEAF5]">
      <div>{skill?.icon}</div>
      <h1 className="text-lg font-bold">{skill.name}</h1>
      {/* <div className="w-full bg-gray-300 h-2 rounded overflow-hidden">
        <div
          className="bg-green-500 h-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div> */}
    </div>
  );
}
