import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { StCard } from "../../Components";
import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import StepFour from "./Step4";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description: "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];
function getSteps() {
  return ["First", "Second", "Third", "Fourth"];
}
const getStepContent: (step: number, data?: any) => any = (step, data) => {
  switch (step) {
    case 0:
      return <StepOne formik={data} />;
    case 1:
      return <StepTwo />;
    case 2:
      return <StepThree />;
    case 3:
      return <StepFour />;
    default:
      break;
  }
};
const FormWithStep = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const schema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    requires: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      requires: "1",
    },
    validationSchema: schema,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: (values) => {
      //   console.log("test");
      // alert(JSON.stringify(values, null, 2));
      //   console.log(values);
    },
    onReset: () => {},
  });

  const handleDisableNext = () => {
    let isDisable;
    if (activeStep == 0 && formik.errors) {
      isDisable = true;
      console.log(formik.errors);
    }
    // console.log(isDisable);
    return isDisable;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
                  {/* <Typography>{step}</Typography> */}
                  {getStepContent(index, formik)}
                  <Box>
                    <div>
                      <Button
                        disabled={formik.errors ? true : false}
                        variant="contained"
                        onClick={handleNext}
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
