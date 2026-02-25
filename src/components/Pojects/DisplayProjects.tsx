"use client";
import { ProjectType } from "../../Types/Types";
import { DetailsProject } from "./DetailsProject";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";

export const DisplayProjects = ({ project }: { project: ProjectType }) => {
  const cardRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const magnetStrength = 15;
  const rotationFactor = 0.8;
  const scaleFactor = 1.01;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = (
      cardRef.current as HTMLElement
    ).getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = (clientX - centerX) / (width / 2);
    const y = (clientY - centerY) / (height / 2);

    setPosition({
      x: x * magnetStrength,
      y: y * magnetStrength,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
    const [wishlistVisible, setWishlistVisible] = useState(false);
    const [compareVisible, setCompareVisible] = useState(false);
    const [quickViewVisible, setQuickViewVisible] = useState(false);

    const [rating, setRating] = useState(5);

  return (
    <motion.div
      ref={cardRef}
      className="gap-5 bg-white/10 rounded-lg shadow-lg overflow-hidden cursor-pointer"
      animate={{
        x: position.x,
        y: position.y,
        rotateX: position.y * rotationFactor,
        rotateY: position.x * -rotationFactor,
        scale: isHovered ? scaleFactor : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 1,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="group relative w-full h-[250px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
          className="w-full  duration-300"
        />
        {/* action button */}
        <div>
          <div className="absolute bg-[rgb(0,0,0,0.3)] z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 bottom-0 left-0 flex items-center justify-center w-full h-full">
            <div className="flex items-center gap-[15px] justify-center">
              <div
                onMouseOver={() => setWishlistVisible(true)}
                onMouseOut={() => setWishlistVisible(false)}
                className="relative w-max group-hover:translate-y-0 translate-y-[50px] transition-all opacity-0 group-hover:opacity-100 duration-300"
              >
                <p className="rounded-full bg-white p-2 hover:bg-[#07182E]/90 text-black hover:text-white transition-all duration-200 cursor-pointer">
                  <IoMdHeartEmpty className="text-[1.3rem]" />
                </p>

                {/* tooltip */}
                <p
                  className={`${wishlistVisible ? "opacity-100 z-[100] translate-y-0" : "opacity-0 z-[-1] translate-y-[20px]"} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}
                >
                  Wishlist
                  {/* arrow */}
                  <span className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
                </p>
              </div>

              <div
                onMouseOver={() => setCompareVisible(true)}
                onMouseOut={() => setCompareVisible(false)}
                className="relative w-max group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-[80px]"
              >
                <p className="rounded-full bg-white p-2 hover:bg-[#07182E]/90 text-black hover:text-white transition-all duration-200 cursor-pointer">
                  <HiArrowsUpDown className="text-[1.3rem]" />
                </p>

                {/* tooltip */}
                <p
                  className={`${compareVisible ? "opacity-100 z-[100] translate-y-0" : "opacity-0 z-[-1] translate-y-[20px]"} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}
                >
                  Compare
                  {/* arrow */}
                  <span className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
                </p>
              </div>

              <div
                onMouseOver={() => setQuickViewVisible(true)}
                onMouseOut={() => setQuickViewVisible(false)}
                className="relative w-max group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100 translate-y-[110px]"
              >
                <p className="rounded-full bg-white p-2 hover:bg-[#07182E]/90 text-black hover:text-white transition-all duration-200 cursor-pointer">
                  <IoEyeOutline className="text-[1.3rem]" />
                </p>

                {/* tooltip */}
                <p
                  className={`${quickViewVisible ? "opacity-100 z-[100] translate-y-0" : "opacity-0 z-[-1] translate-y-[20px]"} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}
                >
                  Quick View
                  {/* arrow */}
                  <span className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 justify-between p-3">
        <div>
          <h2 className="text-xl font-semibold uppercase">{project.title}</h2>
          <p className="text-sm pt-2 line-clamp-3">{project?.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col xl:flex-row gap-2 w-full">
            <Link target="_blank" href={project.liveSite} className="w-full">
              <button className="w-full py-1 bg-[var(--primary-color-900)] font-medium rounded-md text-white text-base cursor-pointer border border-transparent hover:border-white/50">
                Live Site
              </button>
            </Link>
            <Link target="_blank" href={project.github} className="w-full">
              <button className="w-full py-1 bg-[var(--primary-color-900)] font-medium rounded-md text-white text-base cursor-pointer border border-transparent hover:border-white/50">
                GitHub
              </button>
            </Link>
          </div>
          <button
            onClick={handleClickOpen}
            className="w-full py-1 bg-[var(--primary-color-900)] font-medium rounded-md text-white text-base cursor-pointer border border-transparent hover:border-white/50"
          >
            View Details
          </button>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          opacity: isHovered ? 0.1 : 0,
          background: isHovered
            ? `radial-gradient(circle at ${50 + position.x / 2}% ${50 + position.y / 2}%, rgba(255,255,255,0.2), transparent 40%)`
            : "none",
        }}
        transition={{ duration: 0.3 }}
      />
      {open && (
        <DetailsProject
          open={open}
          handleClose={handleClose}
          project={project}
        />
      )}
    </motion.div>
  );
};
