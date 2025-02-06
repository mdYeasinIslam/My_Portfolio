import { Link } from "react-router-dom"
import { Button, ButtonGroup } from "@mui/material";
import { ProjectType } from "../../Types/Types";


export const DisplayProjects = ({project}:{project:ProjectType}) => {
  return (
     <div
            className=" flex gap-5 p-3 bg-gray-800 rounded-lg shadow-lg "
          >
            <div className="group w-full h-[300px] overflow-hidden hover:overflow-y-scroll">
              <img
                src={project.image}
                alt={project.title}
                className="  duration-300"
              />
             
            </div>
            <div className="w-full flex flex-col gap-3 justify-center ">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm mt-2">{project?.description.slice(0, 100)}...</p>
              <ButtonGroup className="flex flex-col gap-3">
                  <div className="flex gap-4 w-full">
                      
                    <Link to={project.liveSite} className="w-full">
                        <Button variant="contained" color="primary" sx={{ fontWeight: 800 }} className="w-full bg-[#0d145c] font-semibold">Live Site</Button>
                    </Link>
                    <Link to={project.github} className="w-full">
                    <Button variant="contained" color="primary" sx={{ fontWeight: 800 }} className="w-full bg-[#0d145c] font-semibold">GitHub</Button>
                    </Link>
                  </div>
                <Link to={`/project/${project?.id}`} className="w-full">
                    <Button variant="contained" color="primary" sx={{ fontWeight: 800 }} className="w-full bg-[#0d145c] font-semibold">View Details</Button>
                  </Link>
              </ButtonGroup>
            </div>
          </div>
  )
}
