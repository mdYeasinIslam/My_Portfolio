
const Hobby = () => {
  const activities = [
    { name: "Reading", icon: "📖" },
    { name: "Traveling", icon: "🌍" },
    { name: "Problem Solving", icon: "💻" },
    { name: "Blogging", icon: "📝" },
  ];

  return (
      <section className="bg-gray-900 text-white py-10 px-6 md:px-20">
        <div className="container mx-auto">
             <div className="flex items-center space-x-4 mb-6">
                <div className="rotate-0 text-gray-200 text-sm font-bold tracking-wider">
                LOVE TO DO
                </div>
                <div className="border-2 border-gray-100 w-12"></div>
             </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {activities.map((activity, index) => (
                <div
                    key={index}
                    className="bg-gray-800 hover:bg-gray-700 transition duration-300 p-6 rounded-md flex flex-col items-center justify-center shadow-md"
                >
                    <div className="text-green-500 text-4xl mb-4">{activity.icon}</div>
                    <h3 className="text-lg font-semibold">{activity.name}</h3>
                </div>
                ))}
            </div>
        </div>
     
    </section>
  );
};

export default Hobby;
