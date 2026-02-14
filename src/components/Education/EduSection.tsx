import { GraduationCap, Monitor } from "lucide-react";
import { GrCertificate } from "react-icons/gr";
import { LuAlignStartVertical } from "react-icons/lu";
import { IoSchoolSharp } from "react-icons/io5";

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

export default function EduSection() {
  return (
    <section id="Education" className="py-16">
      <div className="container mx-auto text-white">
        <div className="flex items-center  gap-3 pb-10 text-3xl font-semibold p-0!">
          <IoSchoolSharp className="text-green-500" />
          <span>Education</span>
          <span className="w-20 md:w-28 lg:w-40 border border-white"></span>
        </div>
        <div className="">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute md:left-3 transform -translate-x-1/2 w-1 bg-green-800 h-full"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {educationData?.map((item) => (
                <div key={item.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute md:left-3 transform -translate-x-1/2 -translate-y-1/2 top-8">
                    <div className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full  border-4 border-black">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`relative pl-5 md:pl-12 overflow-x-hidden  ${
                      item?.position === "right" ? "" : ""
                    }`}
                  >
                    <div>
                      <div className="pr-8">
                        <h3 className="text-2xl font-bold ">{item.title}</h3>
                        <p className="text-white/80  text-base font-medium ">
                          {item.institution}
                        </p>
                        <p className="w-fit px-2 py-0.5 rounded-full text-xs font-medium bg-slate-800">
                          {item.period}
                        </p>
                      </div>
                      <div className="pr-8 mt-4">
                        <p className="text-white/90 text-lg text-start">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {/* Left Side */}
                    {/* <div
                      className={` ${
                        item.position === "left" ? "text-right" : "text-right"
                      }`}
                    >
                      {item.position === "left" ? (
                        // Content on left
                        <div className="pr-8">
                          <h3 className="text-2xl font-bold text-black mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-700 text-sm font-medium mb-4">
                            {item.institution} | {item.period}
                          </p>
                        </div>
                      ) : (
                        // Description on left when content is on right
                        <div className="pr-8">
                          <p className="text-slate-700 leading-relaxed text-start">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div> */}

                    {/* Right Side */}
                    {/* <div
                    className={`${
                      item.position === "right" ? "lg:text-left" : "lg:text-right"
                    }`}
                  >
                    {item.position === "right" ? (
                      // Content on right
                      <div className="pl-8">
                        <h3 className="text-2xl font-bold  mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-700 text-sm font-medium mb-4">
                          {item.institution} | {item.period}
                        </p>
                      </div>
                    ) : (
                      // Description on right when content is on left
                      <div className="pl-8">
                        <p className="text-gray-700 leading-relaxed text-start">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div> */}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline End Dot */}
            <div className="absolute md:left-3 transform -translate-x-1/2 bottom-0">
              <div className="w-4 h-4 bg-green-700 rounded-full"></div>
            </div>
          </div>
          {/* <div className="col-span-2">
            <h1 className="text-xl font-semibold mb-2">Certificates :</h1>

            <div className="w-full flex items-center gap-3 p-2 lg:p-4 xl:p-6 rounded-xl md:rounded-2xl border border-gray-200 bg-green-100 shadow-sm hover:shadow transition">
              <div className="bg-[#FAEAF6] p-2 rounded-2xl flex items-center justify-center">
                <GrCertificate className="w-6 h-6 text-black -mt-0.5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Web development
                </h3>
                <p className="text-sm">Programming Hero(Online Platform)</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
