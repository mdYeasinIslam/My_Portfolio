"use client";
import { Link } from "react-scroll";
import { BsStars } from "react-icons/bs";
import Image from "next/image";

export const About = () => {
  return (
    <section
      id="About"
      className="py-20 bg-gradient-to-r from-green-100 via-blue-50 to-pink-100"
    >
      <div className="container mx-auto flex px-4 md:px-2 lg:px-8 gap-5 flex-col-reverse md:flex-row-reverse items-center text-white">
        {/* Image Section */}
        <Image
          src="/about/about1.jpg"
          width={500}
          height={500}
          className="w-full md:w-2/4 rounded-xl mx-auto"
          alt="About Me"
        />

        {/* About Content */}
        <div className=" md:w-[90%] my-auto mx-auto  md:p-3 space-y-5 text-black">
          <h1 className="text-3xl font-medium flex items-center gap-2">
            <BsStars className="text-green-600" />
            <span>About me </span>
            <span className="w-20 md:w-28 lg:w-40 border border-black"></span>
          </h1>
          <h1 className=" text-gray-600">
            I am a Front-end Developer skilled in React.js, Next.js, TypeScript,
            and Tailwind CSS, with a passion for building scalable, responsive
            web applications in collaborative environments.
            <br />
            <br />
            I've completed both personal and client projects focused on
            performance, clean code, and pixel-perfect UI. I'm committed to
            delivering high-quality solutions while continuously expanding my
            skill set toward full-stack development.
          </h1>
          {/* <h1 className=" text-gray-600">
            Hello! This is{" "}
            <span className="font-medium underline"> Yeasin</span>, a passionate
            Frontend developer, skilled in <strong>React.js</strong> along with{" "}
            <strong>TypeScript</strong> and modern UI frameworks like{" "}
            <strong>Material UI, Shadcn-UI and Tailwind CSS</strong>.I also
            explore a little bit about server side technologies such as{" "}
            <strong>Node.js, Express.js and MongoDB</strong> I have worked on
            several personal projects, applying my knowledge to build responsive
            and interactive web applications. While I do not have professional
            work experience, I am confident in my ability to contribute
            effectively by writing clean, maintainable code and continuously
            improving my skills to stay updated with industry trends.
          </h1> */}

          {/* Button Group */}
          <div className="flex gap-5 md:space-x-5 ">
            <Link to="Contact" smooth={true} duration={500}>
              <button
                className="bg-green-600 hover:bg-green-800 font-semibold  px-4 py-1 rounded-lg text-white"
              >
                Contact Me
              </button>
            </Link>
            <Link to="Skill" smooth={true} duration={500}>
              <button
                className="bg-green-600 hover:bg-green-800 font-semibold px-4 py-1 rounded-lg text-white"
              >
                My Skills
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
