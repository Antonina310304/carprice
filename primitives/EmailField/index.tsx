import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';

import { InputAdornment, TextField } from '@mui/material';

import { blockWrapper } from '@components/BrandForm/style.css';

import Icon from '@primitives/Icon';

import { regEmail } from '@utils/regExp';

const textError = {
  EMPTY: 'Поле должно быть заполнено',
  ERROR: 'E-mail адрес введен некорректно',
};

const getError = (value: string): { valid: boolean; errorText: string } => {
  let errorText: string, valid: boolean;

  if (value.length === 0) {
    errorText = textError.EMPTY;
    valid = false;
  } else {
    valid = regEmail.test(value);
    errorText = valid ? '' : textError.ERROR;
  }

  return {
    valid,
    errorText,
  };
};

interface IEmailField {
  name: string;
  defaultValue: string;
  onChange?: any;
}

const EmailField: NextPage<IEmailField> = ({ name, defaultValue, onChange }) => {
  const [state, setState] = useState({
    value: defaultValue,
    touched: defaultValue !== '',
    valid: regEmail.test(defaultValue),
    error: getError(defaultValue).errorText,
  });

  const handleChange = useCallback(
    ({ target: { value } }) => {
      const { valid, errorText } = getError(value);
      setState((prevState) => ({ ...prevState, value, valid, error: errorText }));

      if (onChange) {
        onChange({ value, valid });
      }
    },
    [onChange]
  );

  const handleBlur = useCallback(() => {
    setState((prevState) => ({ ...prevState, touched: true }));
  }, []);

  return (
    <TextField
      {...(state.touched && state.valid ? { focused: true } : {})}
      error={state.touched && !state.valid}
      name={name}
      value={state.value}
      className={blockWrapper}
      fullWidth={true}
      placeholder={'Email'}
      onBlur={handleBlur}
      onChange={handleChange}
      helperText={state.touched && !state.valid && state.error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {state.touched && state.valid && <Icon icon={'checkOutline'} width={16} height={16} />}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default EmailField;
