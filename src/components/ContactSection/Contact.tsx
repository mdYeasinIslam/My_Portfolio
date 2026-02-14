"use client";
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import { Input } from "@mui/material";
import { title } from "framer-motion/client";
import { FiLinkedin, FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
interface ContactInfo {
  title: string;
  des?: string;
  info?: {
    title: string;
    value: string;
    icon: React.ReactNode | string;
    link?: string;
  }[];
  icon?: React.ReactNode | string;
}
const contactDetails: ContactInfo[] = [
  {
    title: "Get In Touch",
    des: "",
    info: [
      {
        title: "Email",
        value: "hyeasinislam@gmail.com",
        link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
        icon: <HiOutlineMail />,
      },
      {
        title: "Phone / WhatsApp",
        value: "01764078605",
        icon: <FiPhone />,
      },
    ],
  },
  {
    title: "Find Me Online",
    des: "",
    info: [
      {
        title: "Github",
        value: "github.com/mdYeasinIslam",
        link: "https://github.com/mdYeasinIslam",
        icon: <SiGithub />,
      },
      {
        title: "LinkedIn",
        value: "linkedin.com/in/mohammad-yeasin-islam",
        link: "https://www.linkedin.com/in/mohammad-yeasin-islam",
        icon: <FiLinkedin />,
      },
    ],
  },
  {
    title: "Download CV",
    des: "View my complete professional background and qualifications in PDF format.",
  },
];
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked");
    if (form.current) {
      emailjs
        .sendForm(
          "service_6jgxduc",
          "template_bevmnal",
          form.current,
          "bWoaOSVfoucQDvqz0",
        )
        .then((result) => {
          // console.log(result);
          form.current?.reset();
          toast.success("Message sent successfully!");
        })
        .catch((error) => {
          toast.error("Failed to send message!");
          console.log(error);
        });
    } else {
      toast.error("Form reference is not available");
    }
  };
    const handleResumeDownload = () => {
      const link = document.createElement("a");
      link.href = "/Yeasin-frontend_developer(resume).pdf";
      link.download = "Yeasin-frontend_developer(resume).pdf";
      link.click();
    };
  return (
    <section id="Contact" className="  py-12  md:px-0  text-white">
      <div className="container mx-auto">
        <h1 className="text-xl md:text-3xl font-medium flex items-center gap-2 py-3">
          <BsStars className="text-green-500" />
          <span className="font-semibold"> Contact Information </span>
          <span className="w-20 md:w-28 lg:w-40 border"></span>
        </h1>
        <div className="lg:grid grid-cols-1  gap-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactDetails?.map((contact, index) => {
              return (
                <div
                  key={index}
                  className="border border-green-600 rounded-xl bg-white/10  transition duration-300 p-4"
                >
                  <h1 className="font-semibold text-xl mb-3">
                    {contact.title}
                  </h1>
                  {contact.info && (
                    <div className="flex flex-col gap-2 ">
                      {contact?.info?.map((icon, index) => {
                        return (
                          <Link
                            key={index}
                            href={icon.link ? icon?.link : "/"}
                            className=" flex items-center gap-3 rounded-md cursor-pointer "
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className=" lg:text-xl">{icon.icon}</div>

                            <p className="text-base   hover:underline">
                              {icon.value}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                  {contact.des && (
                    <p className="text-base font-medium">{contact?.des}</p>
                  )}
                  {contact.title.includes("Download") && (
                    <button
                      onClick={handleResumeDownload}
                      className="relative inline-flex items-center justify-start py-3  px-6 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded-xl hover:pl-10  bg-gray-50 dark:bg-black/50 group mt-4"
                    >
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                      {/* <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                          <svg
                            className="w-5 h-5 text-green-400"
                            fill="none"
                            stroke="#3B9DF8"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                             strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span> */}

                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          className="w-5 h-5 text-green-400"
                          fill="none"
                          stroke="#fff"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>

                      <span className="relative w-full text-base text-left transition-colors duration-200 ease-in-out text-white group-hover:text-white">
                        Download Resume
                      </span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold mb-4">Send us an Email</h3>
            <form
              onSubmit={handleEmail}
              ref={form}
              // action="https://formsubmit.co/hyeasinislam@gmail.com"
              // method="POST"
              className="max-w-lg mx-auto space-y-3"
            >
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-md border !text-white bg-black/50 "
                required
              />
              <textarea
                rows={5}
                name="message"
                placeholder="Write your message here..."
                className="w-full text-base bg-black/50 text-white p-2 rounded-md mb-4 resize-none focus:ring-slate-700 border"
                required
              ></textarea>
              <button
                type="submit"
                className="hover:bg-black/50 text-lg text-white font-semibold px-6 py-2 rounded-md border border-white/30  transition"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
