import React from 'react'

interface PropType {
  skill: {
    name: string;
    level: number;
  };
}

export default function SkillsCard({ skill }:PropType) {
  return (
    <div className="bg-white text-black p-4 rounded shadow-md flex flex-col">
      <span className="text-lg font-bold mb-2">{skill.name}</span>
      {/* <div className="w-full bg-gray-300 h-2 rounded overflow-hidden">
        <div
          className="bg-green-500 h-full"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div> */}
    </div>
  );
}
