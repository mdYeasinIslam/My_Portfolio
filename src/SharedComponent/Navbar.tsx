import {Box, Button, Container } from "@mui/material"
import {  useState } from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { IoHome, IoMenuSharp, IoSchoolSharp } from "react-icons/io5";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
// bg-gradient-to-t  to-[#111a28] from-[#162131] 

export const Navbar = () => {
  const [menubar, setMenubar] = useState(true)

  const NavSectionLink = ({link, children}: {link: string, children: React.ReactNode}) => {
    return <Link
            to={link}
            onClick={() => setMenubar(true)}
                  smooth={true}
      duration={500} className={`flex items-center gap-1 px-3 py-1 cursor-pointer hover:text-black`}>{ children}</Link>  
  }

  return (
    <Container maxWidth="xl" className="fixed z-10 flex items-center justify-between py-4 bg-[#111a28] text-white   bg-gradient-to-l from-black to-gray-900 ">
      
        <Box className='flex items-center gap-2'>
            <div onClick={()=>setMenubar(!menubar)} className="flex  lg:hidden" >
                {
                menubar ?<IoMenuSharp  className="w-5 h-5"/> :<IoMdClose  className="w-5 h-5"/>
                }
          </div>
           <ul  className={`absolute  lg:hidden duration-1000  bg-[#5c6bc0] px-4 py-3 h-[80vh] gap-5 ${menubar?'left-[-200px] top-14':'top-14 left-0'}`}>
                <NavSectionLink
                    link="banner"
                  >
                   <IoHome /> Home
               </NavSectionLink>
               <NavSectionLink
                    link="Project"
                  >
                   <GrProjects className="w-3 h-3" />Project
               </NavSectionLink>

                  <NavSectionLink
                    link="Education"
                  >
                    <IoSchoolSharp className="w-3 h-3" />Education
                  </NavSectionLink>
                  <NavSectionLink
                    link="Skill"
                  >
                    <RiLightbulbFlashLine className="w-3 h-3" />Skills
                  </NavSectionLink>
                  <NavSectionLink
                    link="Contact"
                    >
                  <FaPhoneFlip className="w-3 h-3" />Contact
                  </NavSectionLink>
            </ul>
        <div className="flex items-center gap-2">
          <NavLink to="/" className='flex items-center gap-3'>
            <img src="/logo2.png"className="w-10 bg-black rounded-xl " alt=""/>   
            <h2 className="font-medium text-xl">M Yeasin</h2>          
          </NavLink>
          </div>
        </Box>
        <Box>
            <ul className="hidden lg:flex gap-5  ">
          <Link
            to="banner"
              smooth={true}
              duration={500}
            className={`flex items-center gap-1 px-3 py-1 cursor-pointer hover:text-slate-500`}><IoHome /> Home</Link>  
          <Link
            to="Project"
              smooth={true}
            duration={500} className={`flex items-center gap-1 px-3 py-1 cursor-pointer hover:text-slate-500`}><GrProjects className="w-3 h-3" />Project</Link>  
          
          <Link
            to="Education"
              smooth={true}
            duration={500} className={`flex items-center gap-1 px-3 py-1 cursor-pointer hover:text-slate-500`}><IoSchoolSharp className="w-3 h-3" />Education</Link>  
          
          <Link
            to="Skill"
              smooth={true}
            duration={500} className={`flex items-center gap-1 px-3 py-1 cursor-pointer hover:text-slate-500`}><RiLightbulbFlashLine className="w-3 h-3" />Skills</Link>  
          
          <Link
            to="Contact"
              smooth={true}
            duration={500} className={`flex items-center gap-1 px-3 py-1 cursor-pointer hover:text-slate-500`}><FaPhoneFlip className="w-3 h-3" />Contact</Link>  
          
            </ul>
        </Box>
        <Box>
        <Button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/mYeasin-Resume.pdf"; // File location in the public folder
            link.download = "mYeasin-Resume.pdf"; // Filename when downloading
            link.click();
          }}
          variant="contained">Get Resume</Button>

        </Box>
      </Container>
 
  )
}
