import { StCard } from "../../../Components";
import { TextField } from "@mui/material";
import { Fragment } from "react";

interface IProps {
  formik?: any;
}
const StepTwo = ({ formik }: IProps) => {
  return (
    <StCard noTitle={true}>
      {formik && (
        <Fragment>
          <TextField
            label={"Last Name"}
            variant={"outlined"}
            name={"lastName"}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && formik.errors.lastName !== undefined}
            helperText={formik.touched.lastName ? formik.errors.lastName : ""}
          ></TextField>
        </Fragment>
      )}
    </StCard>
  );
};

export default StepTwo;
