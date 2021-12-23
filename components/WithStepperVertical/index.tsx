import cn from 'classnames';

import { NextPage } from 'next';
import {
  memo, useEffect, useState,
} from 'react';

import {
  Step, StepContent, StepLabel, Stepper,
} from '@mui/material';

import { stepState } from '@pages/AlmostDonePage/elms/Steps/constants';

import StepIcon from './elms/StepIcon';

import {
  content, contentInner, label, step, stepper, success, wait,
} from './style.css';

const stepIcon = (idx: number, activeStep: number | undefined) => function () {
  return (
    <StepIcon
      index={idx + 1}
      view={cn(activeStep && activeStep > idx && stepState.COMPLETED, activeStep === idx && stepState.ACTIVE)}
    />
  );
};

interface IWithStepperVertical {
  steps: string[];
  children: any;
  startStep?: number;
  handleChangeActiveStep?: (arg: number | undefined) => void;
}

const WithStepperVertical: NextPage<IWithStepperVertical> = function ({
  startStep = undefined,
  children,
  steps,
  handleChangeActiveStep,
}) {
  const [activeStep, setActiveStep] = useState(startStep);

  useEffect(() => {
    setActiveStep(startStep);
  }, [startStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const currStep = prevActiveStep || 0;
      return currStep + 1;
    });
  };

  useEffect(() => {
    if (handleChangeActiveStep) {
      handleChangeActiveStep(activeStep);
    }
  }, [handleChangeActiveStep, activeStep]);

  const handleBack = (stepTo: number) => {
    if ((activeStep && activeStep > stepTo) || activeStep === null) {
      setActiveStep(stepTo);
    }
  };

  return (
    <Stepper className={stepper} alternativeLabel activeStep={activeStep} orientation="vertical">
      {steps.map((item: string, idx: number) => (
        <Step key={idx} className={step}>
          <StepLabel
            StepIconComponent={stepIcon(idx, activeStep)}
            className={cn(label, activeStep && activeStep > idx && success, activeStep && activeStep < idx && wait)}
            onClick={() => handleBack(idx)}
          >
            {item}
          </StepLabel>

          <StepContent className={content}>
            <div className={contentInner}>{children(handleNext, activeStep, idx)}</div>
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};

export default memo(WithStepperVertical);
