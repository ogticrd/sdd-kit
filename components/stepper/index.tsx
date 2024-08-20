import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MUIStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

export interface StepperProps {
  stepsName: string[];
  stepsContent: React.ReactNode[];
  stepBackDisabled?: boolean;
  stepNextDisabled?: boolean;
  allStepsComplete: () => void;
  labelBack?: string;
  labelNext?: string;
  labelFinish?: string;
}

export const Stepper = ({ stepsName, stepsContent, stepBackDisabled, stepNextDisabled, allStepsComplete, labelBack = "Atrás", labelNext = "Siguiente", labelFinish = "Finalizar" }: StepperProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === stepsName.length - 1) {
      return allStepsComplete()
    }

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <Box sx={{ width: '100%' }}>
      <MUIStepper activeStep={activeStep}>
        {stepsName.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </MUIStepper>
      {/* {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : ( */}
      <React.Fragment>
        <div style={{ margin: "25px" }}>
          {stepsContent[activeStep]}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            color="inherit"
            disabled={activeStep === 0 || stepBackDisabled}
            onClick={handleBack}
          >
            {labelBack}
          </Button>
          <div style={{ flex: '1 1 auto' }} />
          <Button
            onClick={handleNext}
            disabled={stepNextDisabled}
          >
            {activeStep === stepsName.length - 1 ? labelFinish : labelNext}
          </Button>
        </div>
      </React.Fragment>
      {/* )} */}
    </Box>
  );
}
