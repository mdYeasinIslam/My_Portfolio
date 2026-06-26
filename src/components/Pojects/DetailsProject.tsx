"use client";
import { useEffect } from "react";
import { ProjectType } from "../../Types/Types";
import { BiX } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

// const Transition = forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement;
//   },
//   ref: React.Ref<unknown>
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
type Prop = {
  open?: boolean;
  handleClose: () => void;
  project: ProjectType;
};

export const DetailsProject = ({ handleClose, project }: Prop) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto scrollbar-hide">
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 pt-5 ">
            <h3 className="text-2xl font-bold">Project details</h3>
            <button
              onClick={handleClose}
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors "
            >
              <BiX className="w-7 h-7" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="max-h-[500px] h-full overflow-y-auto scrollbar-hide">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={500}
                className="w-full  h-auto rounded-lg "
              />
            </div>
            <aside className="space-y-1">
              <h1 className="font-semibold">
                <span className="font-medium">Project Name: </span>{" "}
                <span className="bg-[#0d3857] px-2 py-0.5 rounded">
                  {project?.title}
                </span>
              </h1>
              {/* Description */}
              <div>
                <h1 className="font-medium">About :</h1>

                <p className="text-base text-white/60">
                  {project?.description}
                </p>
              </div>
              <div className="py-2">
                <h1 className="font-medium">Technology :</h1>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project?.technology?.map((c, id) => (
                    <div
                      key={id}
                      className="px-2 py-0.5 bg-[#0d3857] text-[#fff] rounded-full text-sm font-semibold"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              {/* Features */}
              <div>
                <h4 className="font-medium ">Key Features:</h4>
                <ul className="pl-5 text base">
                  {project?.features?.map((feature, index) => (
                    <li
                      key={index}
                      className=" list-disc text-base text-white/60"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between gap-5">
                {/* <Button variant="contained" onClick={handleClose}>
                  Close
                </Button> */}
                <Link
                  target="_blank"
                  href={project.liveSite}
                  className="w-full"
                >
                  <button className="w-full text-base py-1 bg-[var(--primary-color-800)] hover:bg-[var(--primary-color-700)] font-semibold rounded-lg text-white">
                    Live Site
                  </button>
                </Link>
                <Link target="_blank" href={project.github} className="w-full">
                  <button className="w-full text-base py-1 bg-[var(--primary-color-800)] hover:bg-[var(--primary-color-700)] font-semibold rounded-lg text-white">
                    GitHub
                  </button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
