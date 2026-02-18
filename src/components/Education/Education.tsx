import { Chip } from "@mui/material"
import Image from "next/image";
import { LuAlignStartVertical } from "react-icons/lu";
import { GraduationCap, Monitor } from "lucide-react";

const educationData = [
  {
    id: 1,
    title: "B.Sc in Computer Science and Engineering",
    institution: "Institute of Science Trade and Technology",
    period: "JAN 2022 - JUNE 2026",
    description:
      "I am pursuing a B.Sc in Computer Science and Engineering, focusing on full-stack web development, data structures, and software engineering. Throughout my academic journey, I've built several real-world projects using React.js, Next.js, and Node.js, and gained a solid foundation in algorithms, databases, and system design.",
    icon: GraduationCap,
    position: "right",
  },
  {
    id: 2,
    title: "WEB DEVELOPMENT COURSE",
    institution: "Programming Hero (Online Bootcamp)",
    period: "JULY 2024 - JAN 2025",
    description:
      "Completed a hands-on web development bootcamp covering HTML, CSS, JavaScript, React, Next.js, TypeScript, Node.js, Express.js, and MongoDB. Built multiple full-stack applications and practiced problem-solving regularly.",
    icon: Monitor,
    position: "left",
  },
  // {
  //   id: 3,
  //   title: "UI/UX DESIGN CERTIFICATION",
  //   institution: "Coursera (Offered by Google)",
  //   period: "APR 2024 - JUN 2024",
  //   description:
  //     "Learned the principles of user-centered design, wireframing, prototyping, and usability testing. Applied Figma to design intuitive and accessible interfaces for web and mobile apps.",
  //   icon: Palette,
  //   position: "right",
  // },
];
export const Education = () => {
  return (
    <section id="Education" className="pt-10 lg:pt-20  text-white">
      <div className="container mx-auto">
        <div className="flex items-center  gap-3 pb-10 text-2xl md:text-3xl font-semibold p-0!">
          <LuAlignStartVertical className="text-green-500" />
          <span>Education</span>
          <span className="w-20 md:w-28 lg:w-40 border border-white"></span>
        </div>
        <div className="relative border-l-[5px] dark:border-slate-700 border-gray-300">
          {educationData.map((milestone, index) => (
            <div key={index} className="mb-8 relative ">
              <div
                id="icon"
                className={`absolute border-2 border-white top-5 -left-[2.5px] transform -translate-x-1/2 -translate-y-1/2 bg-[#3B9DF8] dark:border-slate-600 rounded-full p-2 `}
              >
                {/* {milestone.icon} */}
              </div>
              <div className="pl-6 ">
                <div className="flex flex-col">
                  <h1 className="text-[#3B9DF8] font-semibold text-xl">
                    {milestone.title}
                  </h1>
                  <p className="dark:text-[#abc2d3] text-[#424242] text-base font-semibold">
                    {milestone.institution}
                  </p>
                  <p className="w-fit px-2 py-0.5 rounded-full text-xs font-medium bg-slate-800">
                    {milestone.period}
                  </p>
                </div>
                <p className="text-gray-500 dark:text-slate-400 text-sm mt-2">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
