import { Close } from "@mui/icons-material";
import { Alert, AlertTitle, Collapse, IconButton } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

interface IAlert {
  className?: any;
  children?: any;
  alertTitle?: string;
  variant?: "standard" | "outlined" | "filled";
  severity?: "success" | "info" | "warning" | "error";
}
const StAlert = ({ className, children, alertTitle, variant = "standard", severity = "info" }: IAlert) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setInterval(() => setOpen(true), 5000);
  }, [open]);

  return (
    <Collapse className={"m-1 " + className} in={open}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Close fontSize="inherit" />
          </IconButton>
        }
        variant={variant}
        severity={severity}
      >
        {alertTitle ? <AlertTitle>{alertTitle}</AlertTitle> : <Fragment></Fragment>}
        {children}
      </Alert>
    </Collapse>
  );
};

export default StAlert;
