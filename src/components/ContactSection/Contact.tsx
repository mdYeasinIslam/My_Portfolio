'use client'
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const contactDetails = [
  {
    type: "Email",
    value: "hyeasinislam@example.com",
    icon: "✉️",
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
          console.log(result);
          e.currentTarget.reset();
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
        <h2 className="text-2xl font-bold text-left mb-8 uppercase">
          Contact Information -------------
        </h2>
        <div className="lg:grid grid-cols-2  gap-4">
          <div className="flex flex-col  lg:flex-col gap-6">
            {contactDetails?.map((contact, index) => (
              <a
                key={index}
                className="flex items-center space-x-4  bg-white  transition duration-300 p-6 rounded-md shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-green-500 text-3xl">{contact.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{contact.type}</h3>
                  <p className="text-sm text-gray-700">{contact.value}</p>
                </div>
              </a>
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
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-2 rounded-md"
                required
              />
              <textarea
                className="w-full bg-white text-black p-4 rounded-md mb-4 resize-none focus:ring-2 focus:ring-green-500"
                rows={5}
                name="message"
                placeholder="Write your message here..."
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
