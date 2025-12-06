"use client";
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
  console.log(project);
  return (
    <>
      {/* <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{project?.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {project.description}
        </DialogContentText>
        <DialogContentText>
          <span className="font-semibold">Technology :</span>
          <span className="pl-5">
            {project?.technology?.map((c, id) => (
              <span key={id} className="list-disc ">
                {c}
              </span>
            ))}
          </span>
        </DialogContentText>
        <DialogContentText>
          <span className="font-semibold">Challenge :</span>
          <span className="pl-5">
            {project?.challenges?.map((c, id) => (
              <span key={id} className="list-disc ">
                {c}
              </span>
            ))}
          </span>
        </DialogContentText>
        <DialogContentText>
          <span className="font-semibold">Future plan :</span>
          <span className="pl-5">
            {project?.future_plan?.map((c, id) => (
              <span key={id} className="list-disc ">
                {c}
              </span>
            ))}
          </span>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          Close
        </Button>
        <a href={project?.liveSite} target="_blank" className="w-full">
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: 800 }}
            className="w-full bg-[#0d145c] font-semibold"
          >
            Live Site
          </Button>
        </a>
        <a href={project?.github} target="_blank" className="w-full">
          <Button
            variant="contained"
            color="primary"
            sx={{ fontWeight: 800 }}
            className="w-full bg-[#0d145c] font-semibold"
          >
            GitHub
          </Button>
        </a>
      </DialogActions>
    </Dialog> */}
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-1 border-b">
            <h3 className="text-2xl font-bold text-gray-900">
              Project details
            </h3>
            <button
              onClick={handleClose}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <BiX className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="max-h-[590px] h-full overflow-y-auto">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={500}
                height={500}
                className="w-full  h-auto rounded-lg"
              />
            </div>
            <aside className="space-y-1">
              <h1 className="font-semibold">
                <span className="font-medium">Project Name:</span> {project?.title}
              </h1>
              {/* Description */}
              <div>
                <h1 className="font-medium">About :</h1>

                <p className="text-lg text-gray-600">{project?.description}</p>
              </div>
              <div>
                <h1 className="font-medium">Technology :</h1>
                <ul className="  pl-5 text-base">
                  {project?.technology?.map((c, id) => (
                    <li key={id} className="list-disc">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Features */}
              <div>
                <h4 className="font-medium text-gray-900">Key Features:</h4>
                <ul className="pl-5 text base">
                  {project?.features?.map((feature, index) => (
                    <li key={index} className=" list-disc text-lg">
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
                  <button className="w-full text-base py-1 bg-[var(--primary-color-800)] font-semibold rounded-lg text-white">
                    Live Site
                  </button>
                </Link>
                <Link target="_blank" href={project.github} className="w-full">
                  <button className="w-full text-base py-1 bg-[var(--primary-color-800)] font-semibold rounded-lg text-white">
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
