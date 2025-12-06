import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa6';
import { GrLanguage } from 'react-icons/gr';
import { SlLocationPin } from "react-icons/sl";

const AboutCards = () => {
  const cards = [
    {
      icon: FaRegCalendarAlt,
      bgColor: '#DEFBEA',
      title: '4 Months',
      subtitle: 'Professional Experience'
    },
    {
      icon: FaLaptopCode,
      bgColor: '#DEFBEA',
      title: 'Frontend Focus',
      subtitle: 'Specialization'
    },
    {
      icon: GrLanguage,
      bgColor: '#DEFBEA',
      title: 'Languages',
      subtitle: 'English, Bangla, Hindi, Urdu'
    },
    {
      icon: SlLocationPin,
      bgColor: '#DEFBEA',
      title: 'Remote Ready',
      subtitle: 'Work Preference'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="p-2 lg:p-4 xl:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-sm hover:shadow transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-4" style={{ backgroundColor: card.bgColor }}>
                <Icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutCards