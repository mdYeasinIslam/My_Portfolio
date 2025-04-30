import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-scroll";

export const About = () => {
  return (
    <section id="About" className="py-5 bg-[#111a28] bg-gradient-to-l from-black to-gray-900">
      <div className="md:container mx-auto flex  gap-5 flex-col md:flex-row items-center text-white">
        {/* Image Section */}
        <img src="about3.jpg" className="w-3/4 md:w-2/4  lg:w-2/5 rounded-full mx-auto" alt="About Me" />

        {/* About Content */}
        <div className="border md:w-[90%] my-auto mx-auto border-gray-900 shadow-2xl shadow-slate-800 p-3 space-y-5">
          <h1 className="text-3xl font-medium uppercase">About me -----------</h1>
          <h1 className=" text-slate-300">
            Hello! I am <span className="font-medium underline">Mohammad Yeasin</span>, a passionate Frontend developer.  
            I have dedicated my time to learning and mastering front-end technologies such as <strong>React.js</strong> along with <strong>TypeScript</strong> and modern UI frameworks like  <strong>Material UI, Shadcn-UI and Tailwind CSS</strong>.I also explore a little bit about server side technologies such as <strong>Node.js, Express.js and MongoDB</strong> I have worked on several personal projects, applying my knowledge to
build responsive and interactive web applications. While I do not have professional work experience, I am confident in my ability to contribute effectively by writing clean, maintainable code and continuously improving
my skills to stay updated with industry trends.
          </h1>

          {/* Button Group */}
          <ButtonGroup className="flex gap-5 md:space-x-5 ">
            <Link to="Contact" smooth={true} duration={500}>
              <Button variant="contained" sx={{ fontWeight: 800 }} className="bg-[#0d145c] font-semibold">
                Contact Me
              </Button>
            </Link>
            <Link to="Skill" smooth={true} duration={500}>
              <Button variant="contained" sx={{ fontWeight: 800 }} className="bg-[#0d145c] font-semibold">
                My Skills
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    </section>
  );
};
