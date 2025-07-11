'use client'
import { Button, ButtonGroup } from "@mui/material";
import { ProjectType } from "../../Types/Types";
import { DetailsProject } from "./DetailsProject";
import { useState } from "react";
import Link from "next/link";


export const DisplayProjects = ({ project }: { project: ProjectType }) => {
   const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
     <div className=" lg:flex gap-5 p-3 bg-gray-800 rounded-lg shadow-lg ">
            <div className="group w-full h-[200px]  lg:h-[300px] overflow-hidden hover:overflow-y-scroll">
              <img
                src={project.image}
                alt={project.title}
                className="w-full  duration-300"
              />
             
            </div>
            <div className="w-full flex flex-col gap-3 justify-center ">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm pt-2">{project?.description.slice(0, 90)}...</p>
              <ButtonGroup className="flex flex-col gap-3">
                  <div className="flex flex-col xl:flex-row gap-4 w-full">
                      
                    <Link target="_blank" href={project.liveSite} className="w-full">
                        <Button variant="contained" color="primary" sx={{ fontWeight: 800 }} className="w-full bg-[#0d145c] font-semibold">Live Site</Button>
                    </Link>
                    <Link target="_blank" href={project.github} className="w-full">
                    <Button variant="contained" color="primary" sx={{ fontWeight: 800 }} className="w-full bg-[#0d145c] font-semibold">GitHub</Button>
                    </Link>
                  </div>
                {/* <Link to={`/project/${project?.id}`} className="w-full"> */}
                    <Button onClick={handleClickOpen} variant="contained" color="primary" sx={{ fontWeight: 800 }} className="w-full bg-[#0d145c] font-semibold">View Details</Button>
                  {/* </Link> */}
              </ButtonGroup>
            </div>
            {
              open &&  <DetailsProject open={open} handleClose={handleClose} project={project} />
            }
         
          </div>
  )
}
