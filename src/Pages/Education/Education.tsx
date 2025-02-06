import { Chip } from "@mui/material"

export const Education = () => {
  return (
      <section id="Education" className="py-10 lg:py-0 bg-gray-900 bg-gradient-to-l  from-black to-gray-900 ">
          <div className="container mx-auto flex flex-col md:flex-row  text-white ">
            <div className="border w-full h-full my-auto  mx-auto border-gray-900 shadow-2xl shadow-slate-800 p-3  space-y-3 ">
                  <h1 className="text-xl md:text-2xl font-medium uppercase ">Education -----------</h1>
                  <h1 className="text-2xl md:text-3xl text-slate-300 font-medium "> B. Sc in Computer Science & Engineering (CSE)</h1>
                  <p className=""> Institute of Science Trade And Technology, Dhaka, Bangladesh   </p>
                   {/* <p ><span className="bg-slate-900 px-2 py-3">2022-Present</span></p> */}
                    <Chip
                    color="primary"
                    sx={{fontWeight:'bold'}}
                    label="2022 - Present"
                    className="font-medium px-4 py-1 rounded-full"
                  />
                  <p>I am at Studying B.Sc in Computer Science and Engineering(CSE) from Institute of Science Trade and Technology (Under National University), Dhaka, Bangladesh</p>
           </div>  
            <div className=" w-full h-full ">
                <img src="education.png" className="w-3/4 rounded-full mx-auto" alt="" />  
                </div>

          </div>
    </section>
  )
}
