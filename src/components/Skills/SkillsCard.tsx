import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PropType {
  skill: {
    name: string;
    level: number;
    icon: ReactNode;
  };
}

export default function SkillsCard({ skill }: PropType) {
  return (
    <>
      <motion.div
        className="bg-[#0F172A] p-0.5 rounded shadow-md  hover:scale-105 duration-300 transition-transform "
        style={{
          background: "#0F172A",
          borderRadius: "0.5rem",
          border: "2px solid transparent",
          backgroundImage: `conic-gradient(from 0deg at 50% 50%, #87ceeb, #1e40af, #0F172A, #1e40af, #87ceeb, #87ceeb)`,
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "300% 300%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        <div className="w-full h-full flex items-center gap-2 bg-black p-2 lg:p-4">
          <div>{skill?.icon}</div>
          <h1 className="text-sm md:text-lg font-bold">{skill.name}</h1>
        </div>
      </motion.div>

      {/* <motion.button
        className="relative px-6 py-3 text-white font-semibold rounded-full cursor-pointer bg-[#02367b]"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full p-[2px] -z-10"
          style={{
        background: "linear-gradient(115deg, #d1d1d1, #02367b, #a7bfde)",
        backgroundSize: "400% 100%",
          }}
          animate={{ backgroundPosition: ["0%", "-100%"] }}
          transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
        />
        <span className="relative z-10 block">Start Coding</span>
      </motion.button> */}
    </>
  );
}
