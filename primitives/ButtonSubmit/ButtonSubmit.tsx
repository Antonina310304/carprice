import { NextPage } from 'next';
import React, { memo, SyntheticEvent } from 'react';

import { CircularProgress } from '@mui/material';

import WithButton from '@primitives/WithButton';

interface IButtonSubmit {
  handleSubmit?: (e: SyntheticEvent) => void;
  disabled: boolean;
  submitting: boolean;
  buttonText: string;
  className?: string;
}
const ButtonSubmit: NextPage<IButtonSubmit> = ({ className, handleSubmit, disabled, submitting, buttonText }) => {
  return (
    <WithButton
      text={buttonText}
      disabled={disabled}
      {...(handleSubmit ? { onClick: handleSubmit } : {})}
      className={className}
      startIcon={submitting && <CircularProgress style={{ width: '20px', height: '20px' }} className={'test'} />}
    />
  );
};

export default memo(ButtonSubmit);
