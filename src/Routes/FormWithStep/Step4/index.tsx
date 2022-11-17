import { StCard } from "../../../Components";
import { Grid, TextField } from "@mui/material";
import { Fragment } from "react";

interface IProps {
  formik?: any;
}

const StepThree = ({ formik }: IProps) => {
  return (
    <StCard title="Review Form">
      {formik && (
        <Fragment>
          <Grid item className="d-flex">
            <p className="me-3 col-6 col-sm-3">Firstname: </p> <p>{formik.values.firstName}</p>
          </Grid>
          <Grid item className="d-flex">
            <p className="me-3 col-6 col-sm-3">Lastname: </p> <p>{formik.values.lastName}</p>
          </Grid>{" "}
          <Grid item className="d-flex">
            <p className="me-3 col-6 col-sm-3">Email: </p> <p>{formik.values.email}</p>
          </Grid>
        </Fragment>
      )}
    </StCard>
  );
};

export default StepThree;
