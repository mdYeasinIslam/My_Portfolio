import { Chip } from "@mui/material"
import Image from "next/image";
import { LuAlignStartVertical } from "react-icons/lu";

export const Education = () => {
  return (
    <section
      id="Education"
      className="py-10 lg:py-20 bg-gray-900 bg-gradient-to-l  from-black to-gray-900 "
    >
      <div className="md:container mx-auto flex flex-col-reverse md:flex-row  text-white items-center px-5 md:px-3">
        <div className=" w-full h-full my-auto  mx-auto border-gray-900 py-5 md:p-3  space-y-3 ">
          <h1 className="text-xl md:text-2xl font-medium uppercase flex items-center gap-4">
            <LuAlignStartVertical className="text-gray-400"/>
            <span>Education</span>
            <div className="border border-white w-12 md:w-20 lg:w-40"></div>
          </h1>
          <h1 className="text-2xl md:text-3xl text-slate-300 font-medium ">
            {" "}
            B. Sc in Computer Science & Engineering (CSE)
          </h1>
          <p className="">
            {" "}
            Institute of Science Trade And Technology, Dhaka, Bangladesh{" "}
          </p>
          {/* <p ><span className="bg-slate-900 px-2 py-3">2022-Present</span></p> */}
          <Chip
            color="primary"
            sx={{ fontWeight: "bold" }}
            label="2022 - Present"
            className="font-medium px-4 py-1 rounded-full"
          />
          <p>
            I am at Studying B.Sc in Computer Science and Engineering(CSE) from
            Institute of Science Trade and Technology (Under National
            University), Dhaka, Bangladesh
          </p>
        </div>
        <div className=" w-full h-full">
          <Image
            src="/education/edu3.jpg"
            width={500}
            height={500}
            className="w-full xl:w-full rounded-md mx-auto"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
