import {Box, Button, Container } from "@mui/material"
import {  useState } from "react";
import { GrProjects } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { IoHome, IoMenuSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
     const [menubar, setMenubar] = useState(true);
  return (
    <Container maxWidth="xl" className="flex relative items-center justify-between py-4 bg-[#111a28] text-white bg-gradient-to-t  to-[#111a28] from-[#162131] ">
      
        <Box className='flex items-center gap-2'>
            <div onClick={()=>setMenubar(!menubar)} className="flex  md:hidden" >
                {
                menubar ?<IoMenuSharp  className="w-5 h-5"/> :<IoMdClose  className="w-5 h-5"/>
                }
          </div>
           <ul onClick={()=>setMenubar(true)} className={`absolute block md:hidden duration-1000  bg-[#5c6bc0] px-4 py-3 h-[50vh] gap-5 ${menubar?'left-[-200px] top-12':'top-12 left-0'}`}>
                <NavLink  to={'/'} className={`flex items-center gap-1 px-3 py-1`}><IoHome/> Home</NavLink>  
                <NavLink  to={'/projects'}className={`flex items-center gap-1 px-3 py-1`}><GrProjects className="w-3 h-3"/>Project</NavLink>  
            </ul>
          <div className="flex items-center gap-2">
            <img src="/logo2.png"className="w-10 bg-black rounded-xl " alt=""/>   
            <h2 className="font-medium text-xl">M Yeasin</h2>          
          </div>
        </Box>
        <Box>
            <ul className="hidden md:flex gap-5  ">
                <NavLink to={'/'} className={`flex items-center gap-1 px-3 py-1`}><IoHome/> Home</NavLink>  
                <NavLink to={'/projects'}className={`flex items-center gap-1 px-3 py-1`}><GrProjects className="w-3 h-3"/>Project</NavLink>  
            </ul>
        </Box>
        <Box>
            <Button variant="contained">Get Resume</Button>

        </Box>
      </Container>
 
  )
}
