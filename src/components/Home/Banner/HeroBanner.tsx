"use client";

import { Box, Button } from "@mui/material";
import {
  Play,
  ArrowRight,
  Plus,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function HeroBanner() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Frontend Developer", "React Developer", "Next.js Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="  min-h-screen overflow-hidden bg-gradient-to-r from-green-100 via-blue-50 to-pink-100">
      <div className="container mx-auto relative  p-0">
        {/* Social Media Icons - Left Side */}
        <div className="absolute -left-80 md:left-6 top-[25%] lg:top-1/2 transform -translate-y-1/2 flex flex-col gap-16 ">
          {/* <div className="text-gray-400 text-sm transform -rotate-90 origin-center mb-8">
          Instagram
        </div> */}
          <a
            href="https://github.com/mdYeasinIslam"
            className="text-gray-500 hover:text-gray-900 duration-500 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          {/* <div className="text-gray-400 text-sm transform -rotate-90 origin-center">
          LinkedIn
        </div> */}
          <a
            href="https://www.linkedin.com/in/mohammad-yeasin-islam/"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          {/* <div className="text-gray-400 text-sm transform -rotate-90 origin-center">
          Twitter
        </div> */}
          <a
            href="https://x.com/hyeasinislam"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
          {/* <div className="text-gray-400 text-sm transform -rotate-90 origin-center">
          Facebook
        </div> */}
          <a
            href="https://www.facebook.com/profile.php?id=100011183114419"
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute  top-20 right-20 animate-pulse">
          <div className="w-8 h-8 bg-green-300 rounded-full opacity-60"></div>
          <div className="w-4 h-4 bg-green-400 rounded-full mt-2 ml-4 opacity-80"></div>
        </div>

        <div className="hidden md:block absolute top-32 left-[45%] xl:left-1/2 animate-bounce">
          <div className="w-16 h-1 bg-green-300 opacity-60 transform rotate-45"></div>
          <div className="w-12 h-1 bg-green-300 opacity-60 transform rotate-45 mt-1"></div>
          <div className="w-8 h-1 bg-green-300 opacity-60 transform rotate-45 mt-1"></div>
        </div>

        <div className="absolute top-32 right-1/3">
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
        </div>

        <div className="absolute bottom-32 left-1/4 animate-ping">
          <div className="w-3 h-3 bg-green-400 rounded-full opacity-70"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto pt-24 lg:py-24 flex items-center min-h-screen">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-0 xl:gap-12 md:items-center w-full">
            {/* Left Side - Image */}
            <div className="relative">
              {/* Green Organic Shape Background */}
              <div className="absolute inset-0 -z-10">
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
              <div className="relative  flex justify-center ">
                {/* <img
                  src="/myPic.png"
                  alt="Rachel Davis - Developer"
                  className="w-80 h-96 object-cover object-center hover:scale-105 transition-transform duration-300"
                  style={{
                    clipPath: "none",
                  }}
                /> */}
                  <img
                    src="/myPic.png"
                    alt="Frontend Developer"
                    className="rounded-full md:w-full md:h-full border-2   shadow-lg lg:shadow-gray-300 bg-[#bce4b4]    lg:scale-90 hover:xl:scale-95 duration-500"
                  />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Hey There Badge */}
              <div className="flex items-center space-x-2 animate-fade-in">
                <Plus
                  className="w-5 h-5 text-green-500 animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <span className="text-gray-700 font-medium">Hey There!</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                  I'm Mohammad Yeasin
                </h1>

                {/* Animated Role Text */}
                <div className="relative h-16 overflow-hidden">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-600 absolute inset-0 flex items-center">
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
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg animate-fade-in-up delay-300">
                We're a team of strategic working globally with largest brands,
                We believe that progress only you to play things safe.
              </p>
              <ul className="xl:list-disc text-black grid grid-cols-3 xl:flex justify-center items-center md:justify-start xl:gap-10 font-medium relative xl:left-4 lg:text-xl">
                <li>React.js</li>
                <li>Typescript</li>
                <li>Node JS</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
              {/* Buttons */}
              <div className="flex items-center space-x-6 animate-fade-in-up delay-500">
                <Button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Yeasin-frontend_developer(resume).pdf"; // File location in the public folder
                    link.download = "Yeasin-frontend_developer(resume).pdf"; // Filename when downloading
                    link.click();
                  }}
                  variant="contained"
                  className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span className="text-lg"> Get Resume</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute bottom-20 right-10 animate-bounce delay-1000">
          <div className="w-6 h-6 border-2 border-green-300 rounded-full opacity-60"></div>
        </div>

        <div className="absolute top-1/3 right-10 animate-pulse delay-500">
          <div className="w-2 h-16 bg-green-300 opacity-40 transform rotate-12"></div>
        </div>

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
