"use client";
import { Box } from "@mui/material";
import { useState } from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { IoHome, IoMenuSharp, IoSchoolSharp } from "react-icons/io5";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { RxHobbyKnife } from "react-icons/rx";

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
}) => (
  <Link
    to={link}
    onClick={onClick}
    smooth={true}
    duration={500}
    className={`flex items-center gap-1 font-medium px-3 py-1 cursor-pointer ${className}`}
  >
    {children}
  </Link>
);

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
      className="w-full fixed mx-auto z-10 flex items-center justify-between py-4 px-2  text-white bg-slate-800/40 backdrop-blur-md  border-[0.5px] border-white/20 transition-colors duration-300 shadow-lg rounded-xl"
    >
      {/* Mobile device */}
      <Box className="flex items-center gap-2">
        <div onClick={() => setMenubar(!menubar)} className="flex lg:hidden">
          {menubar ? (
            <IoMenuSharp className="w-7 h-7" />
          ) : (
            <IoMdClose className="w-7 h-7" />
          )}
        </div>
        <ul
          className={`absolute w-2/3 md:w-1/2  lg:hidden duration-1000 px-4 py-5 flex flex-col gap-5 ${
            menubar
              ? "left-[-500px] top-14"
              : "top-16 left-0 bg-gradient-to-r text-black from-green-100 via-blue-50 to-pink-100"
          }`}
        >
          {navItems.map(({ link, label, icon }) => (
            <NavSectionLink
              key={link}
              link={link}
              onClick={() => setMenubar(true)}
              className="bg-green-200 rounded-md py-2 text-lg font-medium  hover:text-black"
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
            <NavSectionLink
              key={link}
              link={link}
              className="hover:text-green-900"
            >
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
          className="bg-[var(--primary-color-800)] hover:bg-[var(--primary-color-700)] text-white px-3 py-2 rounded-lg duration-500 font-semibold"
        >
          Get Resume
        </button>
      </Box>
    </nav>
  );
};
