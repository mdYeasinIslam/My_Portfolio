'use client'
import { FormEvent } from "react";
import toast from "react-hot-toast";

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
const Contact= () => {
  const handleEmail = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('Your message is successfully send')
    e.currentTarget.reset()
  }
  return (
    <section
      id="Contact"
      className="  py-12 px-6 md:px-0 bg-green-100  text-black"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-left mb-8 uppercase">
          Contact Information -------------
        </h2>
        <div className="lg:grid grid-cols-2  gap-4">
          <div className="flex flex-col  lg:flex-col gap-6">
            {contactDetails.map((contact, index) => (
              <a
                key={index}
                className="flex items-center space-x-4  bg-white hover:bg-gray-700 hover:text-white transition duration-300 p-6 rounded-md shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-green-500 text-3xl">{contact.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{contact.type}</h3>
                  <p className="text-sm text-gray-400">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold mb-4">Send Us an Email</h3>
            <form onSubmit={handleEmail} className="max-w-lg mx-auto space-y-3">
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
                placeholder="Write your message here..."
                required
              ></textarea>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
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
