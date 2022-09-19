import { StCard } from "../../../Components";
import { TextField } from "@mui/material";
import { Fragment } from "react";

interface IProps {
  formik?: any;
}

const StepThree = ({ formik }: IProps) => {
  return (
    <StCard title="Review Form">
      {formik && (
        <Fragment>
          <div>{formik.values.firstName}</div>
          <div>{formik.values.lastName}</div>
          <div>{formik.values.email}</div>
        </Fragment>
      )}
    </StCard>
  );
};

export default StepThree;
