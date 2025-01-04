import { AppBar,Box, Button, Container } from "@mui/material"
import {  useState } from "react";
import { GrProjects } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { IoHome, IoMenuSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
     const [menubar, setMenubar] = useState(true);
  return (
    <AppBar className="">
      <Container maxWidth="xl" className="flex items-center justify-between py-2 bg-[#1a237e]">
        <Box>
            <div onClick={()=>setMenubar(!menubar)} className="flex  md:hidden" >
                {
                menubar ?<IoMenuSharp  className="w-5 h-5"/> :<IoMdClose  className="w-5 h-5"/>
           
                }
                
            </div>
             <img src="" alt="" />   
            <h2 className="font-medium text-xl">M Yeasin</h2>          
        </Box>
        <Box>
            <ul className="flex gap-5">
                <NavLink to={'/'} className={`flex items-center gap-1 px-3 py-1`}><IoHome/> Home</NavLink>  
                <NavLink to={'/projects'}className={`flex items-center gap-1 px-3 py-1`}><GrProjects className="w-3 h-3"/>Project</NavLink>  
            </ul>
        </Box>
        <Box>
            <Button variant="contained">Download Resume</Button>

        </Box>
      </Container>
    </AppBar>
  )
}
