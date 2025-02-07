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
     const [menubar, setMenubar] = useState(true);
  return (
    <Container maxWidth="xl" className="fixed z-10 flex items-center justify-between py-4 bg-[#111a28] text-white   bg-gradient-to-l from-black to-gray-900 ">
      
        <Box className='flex items-center gap-2'>
            <div onClick={()=>setMenubar(!menubar)} className="flex  md:hidden" >
                {
                menubar ?<IoMenuSharp  className="w-5 h-5"/> :<IoMdClose  className="w-5 h-5"/>
                }
          </div>
           <ul onClick={()=>setMenubar(true)} className={`absolute block md:hidden duration-1000  bg-[#5c6bc0] px-4 py-3 h-[50vh] gap-5 ${menubar?'left-[-200px] top-12':'top-12 left-0'}`}>
          <Link
            to="banner"
              smooth={true}
              duration={500}
            className={`flex items-center gap-1 px-3 py-1`}><IoHome /> Home</Link>  
          <Link
            to="Project"
              smooth={true}
              duration={500}
            className={`flex items-center gap-1 px-3 py-1`}><GrProjects className="w-3 h-3" />Project</Link>  
            </ul>
        <div className="flex items-center gap-2">
          <NavLink to="/" className='flex items-center gap-3'>
            <img src="/logo2.png"className="w-10 bg-black rounded-xl " alt=""/>   
            <h2 className="font-medium text-xl">M Yeasin</h2>          
          </NavLink>
          </div>
        </Box>
        <Box>
            <ul className="hidden md:flex gap-5  ">
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
            link.href = "/My_resume.pdf"; // File location in the public folder
            link.download = "My_Resume.pdf"; // Filename when downloading
            link.click();
          }}
          variant="contained">Get Resume</Button>

        </Box>
      </Container>
 
  )
}
