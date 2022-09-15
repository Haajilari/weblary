import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { StCard } from "../../../Components";
interface IFormOne {
  onclick?: () => void;
  className?: any;
}
const FormOne = ({ className, onclick }: IFormOne) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <StCard className={className} title="First Step">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="email"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <Button variant="outlined" color="success" type="submit" onClick={onclick}>
          Submit
        </Button>
      </form>
    </StCard>
  );
};

export default FormOne;
