import { ErrorMessage, Field, Form, Formik } from "formik";
import { StCard } from "../../../Components";
import * as Yup from "yup";
import { TextField } from "@mui/material";

interface IProps {
  formik?: any;
}

const StepOne = ({ formik }: IProps) => {
  return (
    <StCard noTitle={true}>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(2, "Must be 2 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        })}
      >
        <Form>
          <TextField
            label={"First Name"}
            variant={"outlined"}
            name={"firstName"}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={typeof formik.errors.firstName == "string"}
            helperText={formik.errors.firstName}
          ></TextField>{" "}
          <ErrorMessage name="firstName" />
          {/* <button type="submit">Submit</button> */}
        </Form>
      </Formik>
    </StCard>
  );
};

export default StepOne;
