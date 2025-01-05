import { Button } from "@mui/material"
import { motion } from "motion/react"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"
export const Banner = () => {
  return (
    <section className="bg-gradient-to-r  to-[#526c96] from-[#111a28] ">
        <div className="container mx-auto h-full lg:h-[34rem] grid grid-cols-1 md:grid-cols-2 relative space-y-10 py-10 md:py-0">
        <div className="md:flex items-center relative  md:left-5 lg:left-16 xl:left-2">
              <div className="text-center md:text-left  text-white space-y-5 ">
                    <div>
                            <h3 className="font-semibold text-xl ">
                            Hi, I am
                        </h3>
                        <motion.h2
                        //    animate={{x:[0,25,0]}}
                        //  transition={{ duration: 5, repeat: Infinity }} 
                        className="text-[#d1d4f1] text-3xl lg:text-7xl font-semibold mb-5"
                            >Mohammad Yeasin</motion.h2>
                    
                  </div>
                  <div className="space-y-5">
                      <div className="space-y-4">
                         <h1 className="text-2xl lg:text-3xl font-bold"> MERN Stack Developer </h1>
                        <ul className="list-disc text-[#d1d4f1] flex justify-center items-center md:justify-start  gap-6 lg:gap-10 font-medium relative md:left-4 lg:text-xl">
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node JS</li>
                        </ul>
                      </div>
                        <div>
                          <p className="flex justify-center items-center md:justify-start gap-2 lg:gap-5">
                              <Button color="inherit" className="font-semibold  shadow-lg">Follow me on --------------</Button>
                              <NavLink to='https://github.com/mdYeasinIslam'><FaGithub className="w-6 h-6" /></NavLink>
                              <NavLink to="https://www.linkedin.com/feed"><FaLinkedin className="w-6 h-6"/></NavLink>
                                <NavLink to="https://www.facebook.com/profile.php?id=100011183114419"><FaFacebook className="w-6 h-6" /></NavLink>
                                <NavLink to="https://x.com/home?lang=en&mx=2"><FaTwitter className="w-6 h-6" /></NavLink>
                              
                                

                            </p>
                        </div>
                  </div>
                  <div>
                      <Button variant="contained" color="primary" sx={{ fontWeight: 800 }}
                          className="bg-[#0d145c] font-semibold">Get Resume</Button>
                  </div>
            </div>   
        </div>
      <div className="lg:flex justify-center ">
        
             <img
                src="/myPic.png"
                alt="Developer"
                className="rounded-full border-2  z-10 shadow-lg shadow-gray-300 bg-[#131525]  lg:scale-75 xl:scale-90 "
               />
      </div>
    </div>
    </section>
  
  )
}
