import { Button } from "@mui/material"
import { motion } from "motion/react"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
export const Banner = () => {
  return (
    <section id="banner" className="pt-14 bg-gradient-to-l from-black to-gray-900 ">
        <div className="container mx-auto h-full lg:h-[34rem] grid grid-cols-1 md:grid-cols-2 relative space-y-10 py-10 md:py-0">
        <div className="md:flex items-center relative  md:left-5 lg:left-16 xl:left-2">
              <div className="text-center md:text-left  text-white space-y-5 ">
                    <div>
                            <h3 className="font-semibold text-xl ">
                            Hi, I am
                        </h3>
                        <motion.h2
                          className="text-[#d1d4f1] text-3xl lg:text-7xl font-semibold mb-5"
                          >Mohammad Yeasin
                        </motion.h2>
                    
                  </div>
                  <div className="space-y-5">
                      <div className="space-y-4">
                         <h1 className="text-2xl lg:text-3xl font-bold"> Frontend Developer </h1>
                        <ul className="xl:list-disc text-[#d1d4f1] grid grid-cols-3 xl:flex justify-center items-center md:justify-start xl:gap-10 font-medium relative xl:left-4 lg:text-xl">
                            <li>React.js</li>
                            <li>Typescript</li>
                            <li>Node JS</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                        </ul>
                      </div>
                        <div>
                          <p className="flex justify-center items-center md:justify-start gap-2 lg:gap-5">
                              <button color="inherit" className="font-semibold  shadow-lg">Follow me on --------------</button>
                              <Link to='https://github.com/mdYeasinIslam'><FaGithub className="w-6 h-6" /></Link>
                              <Link to="https://www.linkedin.com/in/md-yeasin-islam-1b17b3293"><FaLinkedin className="w-6 h-6"/></Link>
                                <Link to="https://www.facebook.com/profile.php?id=100011183114419"><FaFacebook className="w-6 h-6" /></Link>
                                <Link to="https://x.com/home?lang=en&mx=2"><FaTwitter className="w-6 h-6" /></Link>
                            </p>
                        </div>
                  </div>
                  <div>
                <Button
                  onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/mYeasin-Resume.pdf"; // File location in the public folder
                  link.download = "mYeasin-Resume.pdf"; // Filename when downloading
                  link.click();
                }}
                  variant="contained" color="primary" sx={{ fontWeight: 800 }}
                  className="font-semibold">Get Resume</Button>
                  </div>
            </div>   
        </div>
      <div className="lg:flex justify-center ">
        
             <img
                src="/myPic.png"
                alt="Frontend Developer"
                className="rounded-full border-2   shadow-lg shadow-gray-300 bg-[#131525]  lg:scale-75 xl:scale-90 "
               />
      </div>
    </div>
    </section>
  
  )
}
