import cn from 'classnames';

import { NextPage } from 'next';
import { memo } from 'react';

import { Button } from '@mui/material';

import { button } from '@primitives/ButtonSubmit/style.css';

interface IWithButton {
  className?: string;
  text: string;
  [key: string]: any;
}

const WithButton: NextPage<IWithButton> = ({ className, text, ...props }) => {
  return (
    <Button
      {...props}
      color="primary"
      className={cn(button, className)}
      variant="contained"
      size="large"
      fullWidth
      type="submit"
    >
      {text}
    </Button>
  );
};

export default memo(WithButton);
