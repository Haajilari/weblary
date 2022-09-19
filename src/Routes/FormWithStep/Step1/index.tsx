import { StCard } from "../../../Components";
import { TextField } from "@mui/material";
import { Fragment } from "react";

interface IProps {
  formik?: any;
}

const StepOne = ({ formik }: IProps) => {
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
            error={formik.touched.firstName && typeof formik.errors.firstName === "string" ? true : false}
            helperText={formik.touched.firstName ? formik.errors.firstName : ""}
          ></TextField>{" "}
        </Fragment>
      )}
    </StCard>
  );
};

export default StepOne;
