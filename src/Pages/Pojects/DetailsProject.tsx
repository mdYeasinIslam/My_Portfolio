import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import { forwardRef } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { ProjectType } from "../../Types/Types";
import { span } from "motion/react-client";
import { Link } from "react-router-dom";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
type Prop = {
  open: boolean
  handleClose: () => void
  project:ProjectType
}

export const DetailsProject = ({open,handleClose,project}:Prop) => {
  return (
    <Dialog
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
          <ul className="pl-5">{project?.technology?.map((c , id) =><li key={id} className="list-disc ">{c}</li>)}</ul>
          </DialogContentText>
          <DialogContentText>
          <span className="font-semibold">Challange :</span>
          <ul className="pl-5">{project?.challenges?.map((c , id) =><li key={id} className="list-disc ">{c}</li>)}</ul>
          </DialogContentText>
          <DialogContentText>
          <span className="font-semibold">Future plan :</span>
          <ul className="pl-5">{project?.future_plan?.map((c , id) =><li key={id} className="list-disc ">{c}</li>)}</ul>
          </DialogContentText>
      </DialogContent>
      
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Close</Button>
           <Link to={project.liveSite} className="w-full">
              <Button variant="contained" color="primary" sx={{ fontWeight: 800 }} className="w-full bg-[#0d145c] font-semibold">Live Site</Button>
          </Link>
          <Link to={project.github} className="w-full">
          <Button variant="contained" color="primary" sx={{ fontWeight: 800 }} className="w-full bg-[#0d145c] font-semibold">GitHub</Button>
          </Link>
        </DialogActions>
    </Dialog>
  )
}
