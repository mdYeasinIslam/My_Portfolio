import { BsStars } from "react-icons/bs";
import { ProjectType } from "../../Types/Types";
import { DisplayProjects } from "./DisplayProjects";

const projects: ProjectType[] = [
  {
    id: 1,
    title: "AssetPulse",
    description:
      "This project is build for managing company's assets. A company provides a number of assets to the employee and company HR_manager need to manage thats assets.",
    image: "/project/assetPulse.png", // Replace with your image URL
    features: [
      "Provide assets to the employee",
      "Take back assets from employee if asset is returnable",
      "how much asset is used in a month or a year above kind of think a company can handle easily by using this web application",
    ],
    technology: [
      "HTML5 & CSS",
      "Tailwind css & Shadcn UI",
      "React & react-router-dom",
      "Typescript",
      "Node.js",
      "Express.js",
      "Mongodb",
    ],

    challenges: [
      '3-types layout: for- "Normal users","Employees","HR-manager" ',
      "Image host in imgbb site",
      'Data show in tabular formate by using "Tanstack table" ',
      "Search and filter functionality implementation in server-side",
    ],

    future_plan: [
      "Implement payment method properly",
      "Performance optimization for better user experience",
    ],
    liveSite: "https://asset-pulse-system.netlify.app/",
    github: "https://github.com/mdYeasinIslam/asset-management-system",
  },
  {
    id: 2,
    title: "BareBlog",
    description:
      "This site is build for collecting Blogs about Technology. User can share their option or can share their experience about different technology and it will publish as a blog. User can control his/her blog",
    image: "/project/bareblog.png", // Replace with your image URL
    features: [
      "Homepage displays a banner, top blogs, and author details",
      "Users can add new blogs",
      "can view and manage their own blogs",
      "can add blogs to their wishlists",
      "Dark mode supports for better user experience",
    ],
    technology: [
      "HTML5 & CSS",
      "Tailwind css & Meterial UI",
      "React & react-router-dom",
      "Typescript",
      "Node.js",
      "Express.js",
      "Mongodb",
    ],

    challenges: [
      "Design related difficulty",
      "Type related error because of using Typescript",
      "Dark mode implementation",
      'Data show in tabular formate by using "Tanstck table" ',
      "Search and filter functionality implementation in server-side",
    ],
    future_plan: [
      "Optimize performance",
      "Add some purchasable packages",
      "Implement payment method",
      "Security inhance such as axios interceptor",
    ],
    liveSite: "https://a11-bareblog.web.app/",
    github: "https://github.com/mdYeasinIslam/Bare-Blog-client",
  },
  // {
  //   id:3,
  //   title: "ReviewXP",
  //   description: "This site is build for collecting reviews about Games. User can give their opition or can share their experience about different games.",
  //   image: "/project/reviewXp.png",
  //     features:[
  //     "Users can review each game individually.",
  //     "Users can add reviews to their favorite games.",
  //     "Users can save favorite reviews to their wishlist.",
  //     "Dark mode functionality for a better user experience.",
  //     "Comprehensive game review system with user feedback.",
  //     "Personalized wishlist for saving top-rated reviews."
  //   ],
  //    technology: ['HTML5 & CSS', 'Tailwind css & Daiysi UI', 'React & react-router-dom', 'Typescript', 'Node.js', 'Express.js', 'Mongodb'],
  //   challenges: ['Dark mode implementation','Context hook usecase','Some react packages uses such as- React-typewriter,React-fast marquee,React-tooltip etc..','Sorting and filtering reviews','Reviews updation modal handle'],
  //   future_plan:['Image collect/insert from local device','Image host to the imgbb','Security inhance such as JWT , interceptor etc...'],
  //   liveSite: 'https://game-reviewxp.netlify.app/',
  //   github:'https://github.com/mdYeasinIslam/game-reviewXP-client'

  // },
  {
    id: 4,
    title: "OfferHaven",
    description:
      "This site is build for getting all discount or coupon on each shop,where people can use the offer and save their money. Start collecting your coupons now and never pay full price again!",
    image: "/project/offerHeaven.png",
    features: [
      "Coupon on each product",
      "Brands list whose gives discount",
      "User details",
    ],
    technology: [
      "HTML5 & CSS",
      "Tailwind css & Daiysi UI",
      "React & react-router-dom",
    ],
    challenges: [
      "Understanding project concept",
      "Implementation firebase authentication system",
    ],
    future_plan: [
      "Add more brands",
      "Add server side and database for storing data",
      "Dark mode implementation",
      "Payment method implentation",
    ],
    liveSite: "https://practice-firebase-58.web.app/category/1",
    github: "https://github.com/mdYeasinIslam/Offer-haven-A9",
  },

  // {
  //   id:5,
  //   title: "Adventa",
  //   description: "This site provides tourism places related support.People can see details about top tourist places of Bangladesh and can buy packages.Also user can add their favourite tourist places. People can give their opinion about tourist area",
  //   image: "/project/adventa.png", // Replace with your image URL
  //   features: ["Top tourist places details of Bangladesh",'Can buy tour packages ', "People can add their favorite tourist area with details", "Everyone can give their opinion on each tourist place",'User can see reviews on each place'],
  //    technology: ['HTML5 & CSS', 'Tailwind css & Daiysi UI', 'React.js & react-router-dom', 'Node.js', 'Express.js', 'Mongodb'],
  //   challenges:['Collect accurate data of each place','Collection of reviews from user'],
  //   future_plan:['Converting React.js to the React.ts','Inhance security system such as JWT, axios interceptor','Payment method implementation','Finally,providing real time services'],
  //   liveSite: 'https://655b09c18ad8c550c822db8b--aquamarine-mochi-76b629.netlify.app/',
  //   github:'https://github.com/mdYeasinIslam/service-review-client-'

  // },

  {
    id: 6,
    title: "To-Do Field",
    description:
      "This project is build for mantaining daily life of task. Any one can handle his daily task very smoothly by using this site. It is build on Drag-and-drop functionality. User can get better experience using drag-nd-drop on move their task easily.",
    image: "/project/todo_field.png",
    features: [
      "User can add their daily task.",
      "Implement drag-and-drop system so that can change task category. ",
      "User can update or delete their task",
    ],
    technology: [
      "HTML5 & CSS",
      "Tailwind css",
      "React.js & react-router-dom",
      "Node.js",
      "Express.js",
      "Mongodb",
    ],
    challenges: ["Implement drag-and-drop system"],
    future_plan: [
      "Converting JS code to the TypeScript",
      "Add real time Re-order system",
    ],
    liveSite: "https://drag-nd-drop-task.netlify.app",
    github: "https://github.com/mdYeasinIslam/task-drag_nd_drop-client",
  },
];

const Projects = () => {
  return (
    <div
      id="Project"
      className=" min-h-screen flex justify-center items-center bg-gradient-to-r from-pink-50 via-blue-50 to-green-50  text-black py-10"
    >
      <div className="container mx-auto">
       
        <h1 className="text-xl md:text-3xl font-medium flex items-center gap-2 uppercase py-3">
          <BsStars className="text-green-600" />
          <span>Projects </span>
          <span className="w-20 md:w-28 lg:w-40 border border-black"></span>
        </h1>

        <div className=" grid grid-cols-1 md:grid-cols-2 items-center lg:grid-cols-2 gap-6 ">
          {projects.map((project, index) => (
            <DisplayProjects key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
