import cn from 'classnames';

import { NextPage } from 'next';
import React, { memo, useCallback, useState } from 'react';

import { InputAdornment, TextField } from '@mui/material';

import Icon from '@primitives/Icon';

import { useStyles } from './style.css';

interface IWithTextField {
  className?: string;
  inputProps?: any;
  success?: any;
  error?: boolean;
  inputComponent?: any;
  name: string;
  errorText?: string;
  value: string | number;
  onChange?: any;
  onBlur?: any;
  placeholder?: string;
  [key: string]: any;
}

const WithTextField: NextPage<IWithTextField> = ({
  className,
  inputProps,
  success,
  error,
  name,
  errorText,
  value,
  onChange,
  inputComponent,
  onBlur,
  placeholder,
  ...props
}) => {
  const classes = useStyles();
  const [touched, setTouched] = useState(!!value);

  const handleBlur = useCallback(() => {
    if (touched) return;
    setTouched(true);
    if (onBlur) {
      onBlur();
    }
  }, [onBlur, touched]);

  return (
    <TextField
      className={cn(classes.root, className)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {success && touched && <Icon icon={'checkOutline'} width={16} height={16} />}
          </InputAdornment>
        ),
        ...(inputComponent ? { inputComponent: inputComponent } : {}),
        inputProps: inputProps,
      }}
      {...(success && touched ? { focused: true } : {})}
      error={touched && error}
      name={name}
      fullWidth={true}
      value={value}
      onChange={onChange}
      onBlur={handleBlur}
      helperText={touched && errorText}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default memo(WithTextField);
