import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "OfferHaven",
    description: "Save more on your favorite products! Discover the best coupons, exclusive discounts, and unbeatable deals all in one place. Start collecting your coupons now and never pay full price again!",
    image: "/project/offerHeaven.png", // Replace with your image URL
    features: ["Clean and Recycle", "Senior Services", "Save Earth"],
    liveSite:'https://practice-firebase-58.web.app/category/1'
  },
  {
    title: "BareBlog",
    description: "Raccoon Robbers: Adventures featuring a mischievous heist!",
    image: "/project/bareblog.png", // Replace with your image URL
    features: ["Creative Land", "Adventure", "Exploration"],
    liveSite:'https://a11-bareblog.web.app/'
  },
  {
    title: "Adventa",
    description: "Raccoon Robbers: Adventures featuring a mischievous heist!",
    image: "/project/adventa.png", // Replace with your image URL
    features: ["Creative Land", "Adventure", "Exploration"],
    liveSite:'https://655b09c18ad8c550c822db8b--aquamarine-mochi-76b629.netlify.app/'
  },

];

const Projects= () => {
  return (
    <div id="Project" className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <div className="container mx-auto">
         <h1 className="text-xl md:text-2xl font-medium uppercase py-3 ">Projects-----------</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg "
          >
            <div className="group w-[400px] h-[400px] overflow-hidden hover:overflow-y-scroll">
              <img
                src={project.image}
                alt={project.title}
                className="  duration-300"
              />
             
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm mt-2">{project.description}</p>
              <Link to={project.liveSite}>
               <Button variant="contained" color="primary" sx={{ fontWeight: 800 }} className="bg-[#0d145c] font-semibold">Live Site</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
     
    </div>
  );
};

export default Projects;