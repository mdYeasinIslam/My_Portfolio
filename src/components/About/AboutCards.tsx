import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa6';
import { GrLanguage } from 'react-icons/gr';
import { SlLocationPin } from "react-icons/sl";

const AboutCards = () => {
  const cards = [
    {
      icon: FaLaptopCode,
      bgColor: "#DEFBEA",
      title: "Frontend Focus",
      subtitle: "Specialization",
    },
    {
      icon: FaRegCalendarAlt,
      bgColor: "#DEFBEA",
      title: "Professional Experience",
      subtitle: "4 Months",
    },
    {
      icon: GrLanguage,
      bgColor: "#DEFBEA",
      title: "Languages",
      subtitle: "English, Bangla, Hindi, Urdu",
    },
    {
      icon: SlLocationPin,
      bgColor: "#DEFBEA",
      title: "Remote Ready",
      subtitle: "Work Preference",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              // className="p-2 lg:p-4 xl:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-sm hover:shadow transition bg-gradient-to-r from-white to-[#faeef6]"
              className="p-2 lg:p-4 xl:p-6 rounded-xl md:rounded-2xl border border-gray-200  transition bg-white/10"
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
                style={{ backgroundColor: card.bgColor }}
              >
                <Icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold ">
                {card.title}
              </h3>
              <p className="text-sm ">{card.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutCards