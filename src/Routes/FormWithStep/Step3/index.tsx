import { StCard } from "../../../Components";
import { TextField } from "@mui/material";
import { Fragment } from "react";

interface IProps {
  formik?: any;
}

const StepThree = ({ formik }: IProps) => {
  return (
    <StCard noTitle={true}>
      {formik && (
        <Fragment>
          <TextField
            label={"Email Address"}
            variant={"outlined"}
            name={"email"}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email !== undefined}
            helperText={formik.touched.email ? formik.errors.email : ""}
          ></TextField>{" "}
        </Fragment>
      )}
    </StCard>
  );
};

export default StepThree;
