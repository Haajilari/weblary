import { Button, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import React, { useState } from "react";
import { StCard } from "../../../Components";
interface IFormTwo {
  onclick?: () => void;
  className?: any;
}
const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(3, "Too Short!").max(25, "Too Long!").required("Required"),
  lastName: Yup.string().min(3, "Too Short!").max(25, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
const FormTwo = ({ className, onclick }: IFormTwo) => {
  return (
    <StCard className={className} title="First Step">
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values: any) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }: any) => (
          <Form>
            <TextField label="First Name" name="firstName" />
            {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
            <TextField label="Last Name" name="lastName" />
            {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
            <TextField label="Email" name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </StCard>
  );
};

export default FormTwo;
