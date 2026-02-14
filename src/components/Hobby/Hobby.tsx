import Marquee from "react-fast-marquee";
import { PiShootingStarBold } from "react-icons/pi";

const activities = [
  { name: "Gardening", icon: "🌱" },
  { name: "Traveling", icon: "🌍" },
  { name: "Problem Solving", icon: "🧩" },
  { name: "Mobile Games", icon: "🎮" },
  { name: "Reading", icon: "📚" },
  { name: "Photography", icon: "📷" },
  { name: "Cooking", icon: "🍳" },
  { name: "Music(Nasheed)", icon: "🎵" },
  { name: "Cycling", icon: "🚴‍♂️" },
];
const Hobby = () => {

  return (
    <section
      id="hobby"
      className=" text-white py-20 px-6 "
    >
      <div className="container mx-auto   space-y-10">
        <div className="flex items-center gap-5">
          <div className="rotate-0  text-2xl font-bold tracking-wider flex items-center gap-4">
            <PiShootingStarBold className="text-green-600"/>
            <span> LOVE TO DO</span>
          </div>
          <div className="border border-white w-12 md:w-20 lg:w-40"></div>
        </div>
        <Marquee className="!w-full ">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="w-72 bg-white/10 text-white  transition duration-300 py-6 rounded-md flex flex-col items-center justify-center shadow-md ml-10 "
            >
              <div className="text-green-500 text-4xl mb-4">
                {activity.icon}
              </div>
              <h3 className="text-lg font-semibold">{activity.name}</h3>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Hobby;
