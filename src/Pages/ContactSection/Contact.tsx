
const Contact= () => {
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

  return (
    <section id="Contact" className="bg-gray-900 text-white py-12 px-6 md:px-20 bg-gradient-to-l  from-black to-gray-900 " >
      <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactDetails.map((contact, index) => (
          <a
            key={index}
            className="flex items-center space-x-4 bg-gray-800 hover:bg-gray-700 transition duration-300 p-6 rounded-md shadow-lg"
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
        <form className="max-w-lg mx-auto">
          <textarea
            className="w-full bg-gray-800 text-white p-4 rounded-md mb-4 resize-none focus:ring-2 focus:ring-green-500"
            rows={5}
            placeholder="Write your message here..."
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
