import { StCard } from "../../../Components";
import { TextField } from "@mui/material";
import { Fragment, useEffect, useRef } from "react";

interface IProps {
  formik?: any;
}

const StepOne = ({ formik }: IProps) => {
  const inputRef = useRef();
  useEffect(() => {
  }, [formik.touched.firstName]);

  return (
    <StCard noTitle={true}>
      {formik && (
        <Fragment>
          <TextField
            label={"First Name"}
            variant={"outlined"}
            name={"firstName"}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && formik.errors.firstName !== undefined}
            helperText={formik.touched.firstName ? formik.errors.firstName : ""}
          ></TextField>
        </Fragment>
      )}
    </StCard>
  );
};

export default StepOne;
