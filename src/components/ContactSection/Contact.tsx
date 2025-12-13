'use client'
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import { Input } from "@mui/material";

const contactDetails = [
  {
    type: "Email",
    value: "hyeasinislam@gmail.com",
    link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    icon: "✉️",
  },
  {
    type: "Github",
    value: "https://github.com/mdYeasinIslam",
    link: "https://github.com/mdYeasinIslam",
    icon: <SiGithub className="text-black" />,
  },
  {
    type: "Phone / WhatsApp",
    value: "01764078605",
    icon: "📞",
  },
  {
    type: "Address",
    value: "House-175, Tinset-koloni, Mirpur-13",
    icon: "💬",
  },
];
const Contact = () => {
  const form = useRef<HTMLFormElement>(null)

  const handleEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked");
    if (form.current) {
      emailjs
        .sendForm(
          "service_6jgxduc",
          "template_bevmnal",
          form.current,
          "bWoaOSVfoucQDvqz0"
        )
        .then((result) => {
          // console.log(result);
          form.current?.reset()
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
  return (
    <section
      id="Contact"
      className="  py-12 px-6 md:px-0 bg-green-50  text-black"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-left mb-8">
          Contact Information -------------
        </h2>
        <div className="lg:grid grid-cols-2  gap-4">
          <div className="grid grid-cols-2 gap-6">
            {contactDetails?.map((contact, index) => (
              <Link
                key={index}
                href={contact.link ? contact?.link:'/' }
                className=" flex items-center gap-3 bg-white  transition duration-300 max-sm:px-2 max-sm:py-1 md:p-6 rounded-md shadow-lg cursor-pointer hover:scale-105 hover:bg-gradient-to-r from-green-50 to-pink-50 break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-green-500 lg:text-3xl">{contact.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{contact.type}</h3>
                  <p className="text-sm text-gray-700 ">{contact.value}</p>
                </div>
              </Link>
            ))}
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
                className="w-full p-2 rounded-md border bg-white"
                required
              />
              <textarea
                rows={5}
                name="message"
                placeholder="Write your message here..."
                className="w-full bg-white text-black p-4 rounded-md mb-4 resize-none focus:ring-green-700 border"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[var(--primary-color-800)] text-white font-semibold px-6 py-2 rounded-md hover:bg-[var(--primary-color-800)] transition"
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
