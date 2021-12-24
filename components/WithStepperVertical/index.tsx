import cn from 'classnames';

import { NextPage } from 'next';
import { memo, useEffect, useState } from 'react';

import {
  Step, StepContent, StepLabel, Stepper,
} from '@mui/material';

import { stepState } from '@pages/AlmostDonePage/elms/Steps/constants';

import StepIcon from './elms/StepIcon';

import {
  content, contentInner, label, step, stepper, stepperState, success, wait,
} from './style.css';
import WithStepLabel from './elms/WithStepLabel';

interface IWithStepperVertical {
  steps: string[];
  children: any;
  startStep?: number;
  handleChangeActiveStep?: (arg: number | undefined) => void;
}

const WithStepperVertical: NextPage<IWithStepperVertical> = ({
  startStep = undefined,
  children,
  steps,
  handleChangeActiveStep,
}) => {
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
  console.log(activeStep);
  return (
    <Stepper className={stepper} alternativeLabel activeStep={activeStep} orientation="vertical">
      {steps.map((item: string, idx: number) => {
        const Icon = () => (
          <StepIcon
            index={idx + 1}
            view={cn(activeStep && activeStep > idx && stepState.COMPLETED, activeStep === idx && stepState.ACTIVE)}
          />
        );

        const stepStyle = () => {
          if (activeStep > idx) {
            return stepperState.success;
          } if (activeStep < idx) {
            return stepperState.wait;
          }
        };

        return (
          <Step key={idx} className={step}>
            <div className={stepStyle()} />
            <WithStepLabel
              icon={Icon}
              onClick={() => handleBack(idx)}
              className={stepStyle()}
              view={cn(activeStep && activeStep > idx && stepState.COMPLETED,
                activeStep === idx && stepState.ACTIVE,
                activeStep < idx && stepState.DISABLED)}
            >
              {item}
            </WithStepLabel>

            <StepContent className={content}>
              <div className={contentInner}>{children(handleNext, activeStep, idx)}</div>
            </StepContent>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default memo(WithStepperVertical);
