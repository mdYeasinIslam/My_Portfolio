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
          <h1 className="text-xl text-slate-300">
            Hello! I am <span className="font-medium underline">Mohammad Yeasin</span>, a passionate MERN Stack developer. 
            I develop web applications. My core skill is based on JavaScript, and I love to do most things using JavaScript. 
            I love to make the web more open to the world. I am available for any kind of job opportunity that suits my interests.
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
