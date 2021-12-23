import cn from 'classnames';

import { NextPage } from 'next';
import React, {
  memo, useCallback, useEffect, useState,
} from 'react';

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
  defaultTouched?: boolean;
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
  defaultTouched = false,
  placeholder,
  ...props
}) => {
  const classes = useStyles();
  const [touched, setTouched] = useState(!!value || defaultTouched);

  useEffect(() => {
    if (defaultTouched) {
      setTouched(defaultTouched);
    }
  }, [defaultTouched]);

  const handleBlurInput = useCallback(() => {
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
            {success && touched && <Icon icon="checkOutline" width={16} height={16} />}
          </InputAdornment>
        ),
        ...(inputComponent ? { inputComponent } : {}),
        inputProps,
      }}
      {...(success && touched ? { focused: true } : {})}
      error={touched && error}
      name={name}
      fullWidth
      value={value}
      onChange={onChange}
      onBlur={handleBlurInput}
      helperText={touched && errorText}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default memo(WithTextField);
