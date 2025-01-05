import { Button, ButtonGroup } from "@mui/material"

export const About = () => {
  return (
    <section id="About" className=" py-5 bg-[#111a28]  bg-gradient-to-t to-[#233450] from-[#111a28]">
      <div className="container  mx-auto flex flex-col-reverse md:grid md:grid-cols-2  text-white">
        <div className="">
             <img src="about3.jpg" className="w-2/3 md:w-full lg:w-2/3 rounded-full mx-auto" alt="" />  
        </div>
        <div className="border w-[90%]  my-auto mx-auto border-gray-900 shadow-2xl shadow-slate-800 p-3 space-y-5 ">
            <h1 className=" text-3xl font-medium uppercase">About me -----------</h1>
            <h1 className="text-xl text-slate-300 ">Hello! I am <span className="font-medium underline">Mohammad Yeasin</span>, a passionate MERN Stack developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I am available for any kind of job opportunity that suits my interests.</h1>
            <ButtonGroup className="md:space-x-5">
              <Button variant="contained" color="primary" sx={{ fontWeight: 800 }} className="bg-[#0d145c] font-semibold">Contact Me</Button>
            
            <Button variant="contained" color="primary" sx={{ fontWeight: 800 }} className="bg-[#0d145c] font-semibold">My Skills</Button>
            
          </ButtonGroup>
        </div>  

    </div>
    </section>
  )
}
