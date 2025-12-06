import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa6';
import { GrLanguage } from 'react-icons/gr';
import { SlLocationPin } from "react-icons/sl";

const AboutCards = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#DEFBEA] mb-4">
            <FaRegCalendarAlt className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            4 Months (Experience
            )</h3>
          <p className="text-sm text-gray-500">Professional Experience</p>
        </div>

        <div className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#DEFBEA] mb-4">
            <FaLaptopCode className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Frontend Focus
          </h3>
          <p className="text-sm text-gray-500">Specialization</p>
        </div>

        <div className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#DEFBEA] mb-4">
            <GrLanguage className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            {" "}
            Languages (Speaking)
          </h3>
          <p className="text-sm text-gray-500">English,Bangla, Hindi, Urdu</p>
        </div>

        <div className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow transition">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#DEFBEA] mb-4">
            <SlLocationPin className="w-6 h-6 text-black" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Remote Ready</h3>
          <p className="text-sm text-gray-500">Work Preference</p>
        </div>
      </div>
    </div>
  );
}

export default AboutCards