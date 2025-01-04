import { Button } from "@mui/material"
import { motion } from "motion/react"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { NavLink } from "react-router-dom"
export const Banner = () => {
  return (
      <main className="h-[34rem] grid grid-cols-2 bg-gradient-to-r  to-[#526c96] from-[#111a28] relative">
        <section className="flex items-center relative left-24">
              <div className="text-left  text-white space-y-5 ">
                    <div>
                            <h3 className="font-semibold text-xl ">
                            Hi, I am
                        </h3>
                        <motion.h2
                        //    animate={{x:[0,25,0]}}
                        //  transition={{ duration: 5, repeat: Infinity }} 
                        className="text-[#d1d4f1] text-7xl font-semibold mb-5"
                            >Mohammad Yeasin</motion.h2>
                    
                  </div>
                  <div className="space-y-5">
                      <div className="space-y-4">
                         <h1 className="text-3xl font-bold"> MERN Stack Developer </h1>
                        <ul className="list-disc text-[#d1d4f1] flex gap-10 font-medium relative left-4 text-xl">
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node JS</li>
                        </ul>
                      </div>
                        <div>
                          <p className="flex items-center gap-5">
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
          </section>
           <div className="flex justify-center relative">
             <img
                src="/myPic.png"
                alt="Developer"
                className="rounded-full z-10 shadow-lg"
        />
             <img
                src="/imgRing.png"
                alt="Developer"
                className="absolute z-0  bottom-0 right-5   shadow-lg "
        />
      </div>
          {/* <section className='absolute bottom-0 right-0'>
                <figure className="w-full ">
                   
                    <img
                      src="/myPic.png" className="rounded-t-3xl rounded-br-3xl w-2/3" alt="" />
                  
                </figure>
        </section>     */}
    </main>
  )
}
