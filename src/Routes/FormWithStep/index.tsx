import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import StepFour from "./Step4";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

function getSteps() {
  return ["First", "Second", "Third", "Fourth"];
}
const getStepContent: (step: number, data?: any) => any = (step, data) => {
  switch (step) {
    case 0:
      return <StepOne formik={data} />;
    case 1:
      return <StepTwo formik={data} />;
    case 2:
      return <StepThree formik={data} />;
    case 3:
      return <StepFour formik={data} />;
    default:
      break;
  }
};
const FormWithStep = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const schema = Yup.object().shape({
    firstName: Yup.string()
      .max(15, "Must be under 15 letters")
      .min(2, "Must be over 2 letters")
      .required("Required"),
    lastName: Yup.string()
      .max(15, "Must be under 30 letters")
      .min(2, "Must be over 2 letters")
      .required("Required"),
    email: Yup.string().email("Invalid Email...").required("Required"),
    requires: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: schema,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: (values: any) => {
    },
    onReset: () => {},
  });

  const handleDisableNext = () => {
    let isDisable = false;
    if (activeStep === 0 && typeof formik.errors.firstName === "string") {
      isDisable = true;
    } else if (activeStep === 1 && typeof formik.errors.lastName === "string") {
      isDisable = true;
    } else if (activeStep === 2 && typeof formik.errors.email === "string") {
      isDisable = true;
    }
    return isDisable;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if (activeStep === 3) {
      formik.submitForm();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = (values: any) => {
    setActiveStep(0);
    formik.resetForm();
  };

  return (
    <Box sx={{ maxWidth: 600 }}>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step}>
                <StepLabel
                  optional={index === 3 ? <Typography variant="caption">Last step</Typography> : null}
                >
                  {step}
                </StepLabel>
                <StepContent>
                  {getStepContent(index, formik)}
                  <Box>
                    <div>
                      <Button
                        disabled={handleDisableNext()}
                        onClick={handleNext}
                        variant="contained"
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </form>
      </FormikProvider>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default FormWithStep;
