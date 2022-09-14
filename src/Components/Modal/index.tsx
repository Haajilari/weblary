import * as React from "react";
import "./style.scope.scss";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import StCard from "../Card";

interface IModal {
  children?: any;
  btnColor?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  btnVariant?: "text" | "outlined" | "contained";
  btnSize?: "small" | "medium" | "large";
  modalTitle?: string;
}

const StModal = ({ children, btnColor, btnVariant, btnSize, modalTitle = "Test Modal" }: IModal) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button color={btnColor} variant={btnVariant} size={btnSize} onClick={handleOpen}>
        Open modal
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <Card className="modal-instyle">
            <CardHeader title={modalTitle} />
            <Divider />
            <CardContent>{children}</CardContent>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
};
export default StModal;
