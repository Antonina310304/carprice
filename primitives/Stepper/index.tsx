import cn from 'classnames';

import { NextPage } from 'next';
import React, { memo, ReactNode } from 'react';

import { Accordion, AccordionDetails } from '@mui/material';

import Typography from '@primitives/Typography';

import {
  accordionDetails,
  accordionHeader,
  accordionWrapper,
  stepCurrent,
  stepNext,
  stepPrev,
  subtitle,
  title,
} from './style.css';

interface IStepper {
  activeStep: number;
  steps: any;
  children: (arg: number) => ReactNode;
}

const Stepper: NextPage<IStepper> = ({ steps, activeStep, children }) => (
  <>
    {steps.map((item: any, idx: number) => (
      <Accordion
        // TransitionProps={{ timeout: 1000 }}
        key={idx}
        expanded={!(activeStep < idx)}
        className={cn(accordionWrapper, {
          [stepNext]: idx > activeStep,
          [stepPrev]: idx < activeStep,
          [stepCurrent]: idx === activeStep,
          // [stepDirty]: idx !== activeStep,
        })}
      >
        <div className={accordionHeader}>
          <Typography as="p" type="main" className={title}>
            {item.title}
          </Typography>
          <Typography as="p" type="main" className={subtitle}>
            {item.subtitle}
          </Typography>
        </div>
        <AccordionDetails className={accordionDetails}>
          <div>{children(idx)}</div>
        </AccordionDetails>
      </Accordion>
    ))}
  </>
);

export default memo(Stepper);
