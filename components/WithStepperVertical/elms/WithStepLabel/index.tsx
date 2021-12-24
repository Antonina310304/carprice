import React, { ElementType, memo, ReactNode } from 'react';
import cn from 'classnames';
import { StepLabel } from '@mui/material';
import { NextPage } from 'next';

import { stepState } from '@components/WithStepperVertical/constants';
import { label, stepperState } from './style.css';

interface IWithStepLabel {
  icon: ElementType;
  onClick: () => void;
  children: string
  view: string;
}

const WithStepLabel: NextPage<IWithStepLabel> = ({
  icon, onClick, children, view,
}) => {
  console.log(view);
  return (
    <>
      {view === stepState.ACTIVE
      && (
        <StepLabel
          StepIconComponent={icon}
          className={cn(label, stepperState.success)}
          onClick={onClick}
        >
          {children}

        </StepLabel>
      )}
      {view === stepState.COMPLETED
      && (
        <StepLabel
          StepIconComponent={icon}
          className={cn(label, stepperState.wait)}
          onClick={onClick}
        >
          {children}

        </StepLabel>
      )}
      {view === 'disabled'
      && (
        <StepLabel
          StepIconComponent={icon}
          className={label}
          onClick={onClick}
        >
          {children}

        </StepLabel>
      )}

    </>
  );
};

export default memo(WithStepLabel);
