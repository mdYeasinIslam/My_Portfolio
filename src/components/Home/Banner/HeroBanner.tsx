"use client";

import { Button } from "@mui/material";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

export default function HeroBanner() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Frontend Developer", "React Developer", "Next js Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
      <section
        id="banner"
        // className="bg-gradient-to-r from-green-100 via-blue-50 to-pink-50"
        className="bg-gradient-to-r from-[#05121C] via-[#041B29] to-[#05121D]"
      >
        <div className="container relative pt-5 md:pt-20 lg:pt-0 ">
          {/* Social Media Icons - Left Side */}
          <div className="absolute  left-6 lg:left-5 top-[25%] md:top-[35%] lg:top-1/2 transform -translate-y-1/2 flex flex-col gap-5 md:gap-16 text-white">
            {/* <div className="text-gray-400 text-sm transform -rotate-90 origin-center mb-8">
          Instagram
        </div> */}
            <a
              href="https://github.com/mdYeasinIslam"
              className=" duration-500 transition-colors"
            >
              <FaGithub className="w-6 md:h-6" />
            </a>
            {/* <div className="text-gray-400 text-sm transform -rotate-90 origin-center">
          LinkedIn
        </div> */}
            <a
              href="https://www.linkedin.com/in/mohammad-yeasin-islam/"
              className="text-blue-600 transition-colors"
            >
              <FaLinkedin className="w-6 md:h-6" />
            </a>
            {/* <div className="text-gray-400 text-sm transform -rotate-90 origin-center">
          Twitter
        </div> */}
            <a href="https://x.com/hyeasinislam" className=" transition-colors">
              <FaXTwitter className="w-5 md:h-5" />
            </a>
            {/* <div className="text-gray-400 text-sm transform -rotate-90 origin-center">
          Facebook
        </div> */}
            <a
              href="https://www.facebook.com/profile.php?id=100011183114419"
              className="text-blue-600 transition-colors"
            >
              <FaFacebook className="w-6 md:h-6" />
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="absolute  top-20 right-2 md:right-20 animate-pulse">
            <div className="w-8 h-8 bg-green-300 rounded-full opacity-60"></div>
            <div className="w-4 h-4 bg-green-400 rounded-full mt-2 ml-4 opacity-80"></div>
          </div>

          <div className=" absolute top-72 md:top-1/2 lg:top-32 max-lg:right-0 lg:left-[45%] 2xl:left-1/2 animate-bounce">
            <div className="w-16 h-1 bg-green-300 opacity-60 transform rotate-45"></div>
            <div className="w-12 h-1 bg-green-300 opacity-60 transform rotate-45 mt-1"></div>
            <div className="w-8 h-1 bg-green-300 opacity-60 transform rotate-45 mt-1"></div>
          </div>

          {/* <div className="absolute top-32 right-1/3">
          <svg
            width="60"
            height="40"
            viewBox="0 0 60 40"
            className="text-gray-300 animate-pulse"
          >
            <path
              d="M10 20 Q 30 5, 50 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div> */}

          <div className="hidden lg:flex gap-3 absolute bottom-40 xl:bottom-32 2xl:bottom-44 left-60 xl:left-80 animate-ping ">
            <div className="w-3 h-3 bg-green-400 rounded-full opacity-70"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full opacity-70"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full opacity-70"></div>
          </div>

          {/* Main Content */}
          <div className="flex items-center min-h-screen xl:min-h-[800px]">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3 lg:gap-0 xl:gap-12 lg:items-center w-full">
              {/* Left Side - Image */}
              <div className="relative">
                {/* Green Organic Shape Background */}
                <div className="absolute top-20 inset-0 -z-10">
                  <svg
                    width="500"
                    height="600"
                    viewBox="0 0 500 600"
                    className="w-full h-full animate-pulse"
                    style={{ transform: "translate(-50px, -50px)" }}
                  >
                    <path
                      d="M100 50 Q 400 20, 450 200 Q 480 400, 300 550 Q 150 580, 50 400 Q 20 200, 100 50 Z"
                      fill="#22c55e"
                      opacity="0.9"
                    />
                  </svg>
                </div>

                {/* Person Image */}
                <div className="relative ">
                  <Image
                    // src="/myPic3.png"
                    // src="https://img.freepik.com/premium-photo/journalist-digital-avatar-generative-ai_934475-9380.jpg?semt=ais_hybrid&w=740&q=80"
                    src={"/banner-img2.png"}
                    alt="Frontend Developer"
                    width={500}
                    height={500}
                    className=" w-full  shadow shadow-black rounded-2xl scale-75   duration-500"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-4 md:space-y-8 text-white">
                {/* Hey There Badge */}
                <div className="flex  items-center space-x-2 ">
                  <Plus
                    className="w-5 h-5 text-green-500 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                  <span className=" font-medium">Hey There!</span>
                </div>

                {/* Main Heading */}
                <div className="space-y-2">
                  <h1 className="text-3xl  xl:text-6xl font-bold text-white leading-tight animate-fade-in-up">
                    I'm Mohammad Yeasin
                  </h1>

                  {/* Animated Role Text */}
                  <div className="relative h-10 md:h-16 overflow-hidden">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90 absolute inset-0 flex items-center">
                      <span
                        key={currentRole}
                        className="inline-block animate-slide-up"
                        style={{
                          animation: "slideUp 0.5s ease-in-out",
                        }}
                      >
                        {roles[currentRole]}
                      </span>
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80  font-medium text-sm md:text-lg  max-w-lg animate-fade-in-up delay-300 !mt-0">
                  We're a team of strategic working globally with largest
                  brands, We believe that progress only you to play things safe.
                </p>
                <ul className="w-fit skills-list list-disc list-inside  flex flex-wrap gap-x-4 xl:gap-x-10 font-medium text-sm md:text-lg  lg:text-xl  [&>li::marker]:[margin-right:0] [&>li::marker]:[text-indent:0]">
                  <li>Typescript</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Node Js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
                {/* Buttons */}
                <div className="flex items-center space-x-6 animate-fade-in-up delay-500">
                  {/* <button
                  title="Download My Resume"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Yeasin-frontend_developer(resume).pdf"; // File location in the public folder
                    link.download = "Yeasin-frontend_developer(resume).pdf"; // Filename when downloading
                    link.click();
                  }}
                  className="bg-[var(--primary-color-800)] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[var(--primary-color-800)] hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span className="text-xl"> Get Resume</span>
                  <ArrowRight className="w-6 h-6" />
                </button> */}
                  <Link to="Contact">
                    <Button
                      variant="contained"
                      title="Download My Resume"
                      style={{
                        fontWeight: 600,
                        backgroundColor: "transparent",
                        color: "white",
                        border: " 1px solid #475569",
                      }}
                      className="md:!text-lg !normal-case !rounded-lg !shadow-none hover:!bg-black/50  !transition-all !duration-300"
                    >
                      Hire me
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    title="Download My Resume"
                    endIcon={<ArrowRight width={20} className="" />}
                    style={{
                      fontWeight: 600,
                      border: "0.5px solid transparent",
                    }}
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/Yeasin-frontend_developer(resume).pdf"; // File location in the public folder
                      link.download = "Yeasin-frontend_developer(resume).pdf"; // Filename when downloading
                      link.click();
                    }}
                    className="md:!text-lg !normal-case !rounded-lg !bg-black/50  hover:!border-white/50 !transition-colors !duration-300"
                  >
                    Get Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Decorative Elements */}
          {/* <div className="hidden lg:block absolute bottom-40 right-10 animate-bounce delay-1000">
          <div className="w-6 h-6 border-2 border-green-300 rounded-full opacity-60"></div>
        </div> */}

          {/* <div className="absolute top-1/3 right-10 animate-pulse delay-500">
          <div className="w-2 h-16 bg-green-300 opacity-40 transform rotate-12"></div>
        </div> */}

          {/* Custom CSS for animations */}
          <style jsx>{`
            @keyframes slideUp {
              0% {
                transform: translateY(100%);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }

            @keyframes fade-in {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }

            @keyframes fade-in-up {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fade-in {
              animation: fade-in 1s ease-in-out;
            }

            .animate-fade-in-up {
              animation: fade-in-up 1s ease-in-out;
            }

            .delay-300 {
              animation-delay: 1s;
            }

            .delay-500 {
              animation-delay: 1s;
            }

            .delay-1000 {
              animation-delay: 1s;
            }

            .animate-slide-up {
              animation: slideUp 0.5s ease-in-out;
            }
          `}</style>
        </div>
      </section>
  );
}
