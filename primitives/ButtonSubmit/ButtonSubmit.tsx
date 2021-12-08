import cn from 'classnames';

import { NextPage } from 'next';
import React, { memo, SyntheticEvent } from 'react';

import { Button, CircularProgress } from '@mui/material';

import { button } from './style.css';

interface IButtonSubmit {
  handleSubmit?: (e: SyntheticEvent) => void;
  disabled: boolean;
  submitting: boolean;
  buttonText: string;
  className?: string;
}
const ButtonSubmit: NextPage<IButtonSubmit> = ({ className, handleSubmit, disabled, submitting, buttonText }) => {
  console.log(submitting);
  return (
    <Button
      {...(handleSubmit ? { onClick: handleSubmit } : {})}
      disabled={disabled}
      color="primary"
      className={cn(className, button)}
      variant="contained"
      size="large"
      fullWidth
      type="submit"
      startIcon={submitting && <CircularProgress style={{ width: '20px', height: '20px' }} className={'test'} />}
    >
      {buttonText}
    </Button>
  );
};

export default memo(ButtonSubmit);
