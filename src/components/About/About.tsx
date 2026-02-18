"use client";
import { BsStars } from "react-icons/bs";
import { Link } from "react-scroll";
import AboutCards from "./AboutCards";

export const About = () => {
  return (
    <section
      id="About"
      // className="pt-20 pb-20 bg-gradient-to-r from-green-100 via-blue-50 to-pink-50"
      className="md:pt-28 lg:pt-0 "
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-3  lg:gap-5   text-white">
        {/* Image Section */}
        {/* <Image
          src="/about/about1.jpg"
          width={500}
          height={500}
          className="w-full md:w-2/4 rounded-xl mx-auto"
          alt="About Me"
        /> */}
        <div className="order-1 md:order-2">
          <AboutCards />
        </div>

        {/* About Content */}
        <div className="space-y-5">
          <h1 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
            <BsStars className="text-green-600" />
            <span>About me </span>
            <span className="w-20 md:w-28 lg:w-40 border border-white"></span>
          </h1>
          <p className="text-base md:text-lg text-white/80">
            I am Yeasin, a Front-end Developer specializing in React.js,
            Next.js, TypeScript, and Tailwind CSS, with a passion for building
            scalable, responsive web applications in collaborative environments.
            <br />
            <br />
            I've completed both personal and office projects focused on
            performance, clean code, and pixel-perfect UI. I'm committed to
            delivering high-quality solutions while continuously expanding my
            skill set toward full-stack development.
          </p>
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
          <div className="flex gap-5 md:gap-4 ">
            <Link to="Contact" smooth={true} duration={500}>
              <button className="text-sm md:text-lg  text-white bg-transparent hover:bg-black/90 border border-white/40 font-semibold  px-5 py-1.5 rounded-lg ">
                Contact Me
              </button>
            </Link>
            <Link to="Skill" smooth={true} duration={500}>
              <button className="text-sm md:text-lg  bg-black/50 border border-transparent  hover:border-white/50 transition-colors duration-300 font-semibold px-5 py-1.5 rounded-lg text-white">
                My Skills
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
