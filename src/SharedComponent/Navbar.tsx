"use client";
import { Box } from "@mui/material";
import { useState } from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { IoHome, IoMenuSharp, IoSchoolSharp } from "react-icons/io5";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { RxHobbyKnife } from "react-icons/rx";
import { Link } from "react-scroll";


const navItems = [
  { link: "banner", label: "Home", icon: <IoHome className="-mt-0.5"/> },
  { link: "About", label: "About", icon: <FcAbout className="-mt-0.5"/> },
  {
    link: "Education",
    label: "Education",
    icon: <IoSchoolSharp className="-mt-0.5"/>,
  },
  { link: "hobby", label: "Hobby", icon: <RxHobbyKnife className="-mt-0.5" /> },
  {
    link: "Skill",
    label: "Skills",
    icon: <RiLightbulbFlashLine className="-mt-0.5" />,
  },
  {
    link: "Project",
    label: "Project",
    icon: <GrProjects className="w-3 h-3 -mt-0.5" />,
  },
  {
    link: "Contact",
    label: "Contact",
    icon: <FaPhoneFlip className="-mt-0.5"/>,
  },
];

const NavSectionLink = ({
  link,
  children,
  onClick,
  className = "",
}: {
  link: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  }) => {
   
  return (
    <Link
      to={link}
      activeClass="active"
      spy={true}
      offset={-70}
      onClick={onClick}
      smooth={true}
      duration={500}
      className={`font-medium px-3 py-1 cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
  };

export const Navbar = () => {
  const [menubar, setMenubar] = useState(true);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Yeasin-frontend_developer(resume).pdf";
    link.download = "Yeasin-frontend_developer(resume).pdf";
    link.click();
  };

  return (
    <nav
      // className="w-full fixed mx-auto z-10 flex items-center justify-between py-4 px-2 bg-gradient-to-r text-black from-green-100 via-blue-50 to-pink-50"
      className="w-full fixed mx-auto z-10 flex items-center justify-between py-3 px-4  text-white bg-slate-800/40 backdrop-blur-md  border-[0.5px] border-white/20 transition-colors duration-300 shadow-lg "
    >
      {/* Mobile device */}
      <Box className="flex items-center gap-2">
        <div onClick={() => setMenubar(!menubar)} className="flex lg:hidden">
          {menubar ? (
            <IoMenuSharp className="w-6 h-6" />
          ) : (
            <IoMdClose className="w-6 h-6" />
          )}
        </div>
        <ul
          className={`absolute w-2/3 md:w-1/2  bg-[#05121C] text-white lg:hidden duration-1000 px-4 py-5 flex flex-col gap-1 ${
            menubar ? "left-[-500px] top-16" : "top-16 left-0   "
          }`}
        >
          {navItems.map(({ link, label }) => (
            <NavSectionLink
              key={link}
              link={link}
              onClick={() => setMenubar(true)}
              className="bg-white/20 rounded-md text-base font-medium"
            >
              {/* {icon} */}
              {label}
            </NavSectionLink>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link to="banner" className="flex items-center gap-3">
            <img src="/logo2.png" className="w-10 bg-black rounded-xl" alt="" />
            <h2 className="font-medium text-xl">M Yeasin</h2>
          </Link>
        </div>
      </Box>

      {/* Large device */}
      <Box>
        <ul className="hidden lg:flex xl:gap-5">
          {navItems.map(({ link, label, icon }) => (
            <NavSectionLink key={link} link={link} className="hover:underline">
              {/* {icon} */}
              {label}
            </NavSectionLink>
         
          ))}
        </ul>
      </Box>

      {/* Resume button */}
      <Box>
        <button
          title="Download My Resume"
          onClick={handleResumeDownload}
          className="text-white text-sm md:text-base font-semibold bg-transparent hover:bg-black/90 border border-white/40 py-0.5  px-3 md:py-2 rounded-lg duration-300 "
        >
          Get Resume
        </button>
      </Box>
    </nav>
  );
};
