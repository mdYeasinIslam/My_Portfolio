"use client";
import { Box, Button } from "@mui/material";
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
  { link: "banner", label: "Home", icon: <IoHome /> },
  { link: "About", label: "About", icon: <FcAbout /> },
  {
    link: "Education",
    label: "Education",
    icon: <IoSchoolSharp />,
  },
  { link: "hobby", label: "Hobby", icon: <RxHobbyKnife /> },
  {
    link: "Skill",
    label: "Skills",
    icon: <RiLightbulbFlashLine />,
  },
  {
    link: "Project",
    label: "Project",
    icon: <GrProjects />,
  },
  {
    link: "Contact",
    label: "Contact",
    icon: <FaPhoneFlip />,
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
    className={`flex items-center gap-1 px-3 py-1 cursor-pointer ${className}`}
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
    <nav className="w-full fixed mx-auto z-10 flex items-center justify-between py-4 px-2 bg-gradient-to-r text-black from-green-100 via-blue-50 to-pink-100">
      {/* Mobile device */}
      <Box className="flex items-center gap-2">
        <div onClick={() => setMenubar(!menubar)} className="flex lg:hidden">
          {menubar ? (
            <IoMenuSharp className="w-5 h-5" />
          ) : (
            <IoMdClose className="w-5 h-5" />
          )}
        </div>
        <ul
          className={`absolute w-1/2 h-[100vh] lg:hidden duration-1000 px-4 py-3 gap-5 ${
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
              className="hover:text-black"
            >
              {icon} {label}
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
        <ul className="hidden lg:flex gap-5">
          {navItems.map(({ link, label, icon }) => (
            <NavSectionLink
              key={link}
              link={link}
              className="hover:text-green-900"
            >
              {icon} {label}
            </NavSectionLink>
          ))}
        </ul>
      </Box>

      {/* Resume button */}
      <Box>
        <Button
          onClick={handleResumeDownload}
          variant="contained"
          className="bg-green-500 hover:bg-green-700 duration-500 font-semibold"
        >
          Get Resume
        </Button>
      </Box>
    </nav>
  );
};
