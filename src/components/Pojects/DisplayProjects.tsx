"use client";
import { ProjectType } from "../../Types/Types";
import { DetailsProject } from "./DetailsProject";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const DisplayProjects = ({ project }: { project: ProjectType }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className=" lg:flex gap-5 p-3 bg-white rounded-lg shadow-lg ">
      <div className="group w-full h-[200px]  lg:h-[300px] overflow-hidden hover:overflow-y-scroll">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
          className="w-full  duration-300"
        />
      </div>
      <div className="w-full flex flex-col gap-3 justify-center ">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-sm pt-2">{project?.description.slice(0, 90)}...</p>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col xl:flex-row gap-4 w-full">
            <Link target="_blank" href={project.liveSite} className="w-full">
              <button className="w-full py-1 bg-green-600 font-medium rounded-lg text-white">
                Live Site
              </button>
            </Link>
            <Link target="_blank" href={project.github} className="w-full">
              <button className="w-full py-1 bg-green-600 font-medium rounded-lg text-white">
                GitHub
              </button>
            </Link>
          </div>
          {/* <Link to={`/project/${project?.id}`} className="w-full"> */}
          <button
            onClick={handleClickOpen}
            className="w-full py-1 bg-green-600 font-medium rounded-lg text-white"
          >
            View Details
          </button>
          {/* </Link> */}
        </div>
      </div>
      {open && (
        <DetailsProject
          open={open}
          handleClose={handleClose}
          project={project}
        />
      )}
    </div>
  );
};
