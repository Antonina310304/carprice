import { NextPage } from 'next';
import React, { memo, useCallback, useMemo, useState } from 'react';

import { InputAdornment, TextField } from '@mui/material';

import Icon from '@primitives/Icon';

import { regEmail } from '@utils/regExp';

const textError = {
  EMPTY: 'Поле должно быть заполнено',
  ERROR: 'E-mail адрес введен некорректно',
};

const getError = (value: string): { valid: boolean; errorText: string } => {
  let errorText: string, valid: boolean;

  console.log(value);

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
  className?: string;
}

const EmailField: NextPage<IEmailField> = ({ className, name, defaultValue, onChange }) => {
  const [touched, setTouched] = useState(false);

  const properties = useMemo(() => {
    const { valid, errorText } = getError(defaultValue);
    return {
      valid: valid,
      error: errorText,
    };
  }, [defaultValue]);

  const handleBlur = useCallback(() => {
    if (touched) return;
    setTouched(true);
  }, [touched]);

  return (
    <TextField
      {...(touched && properties.valid ? { focused: true } : {})}
      error={touched && !properties.valid}
      name={name}
      value={defaultValue}
      className={className}
      fullWidth={true}
      placeholder={'Email'}
      onBlur={handleBlur}
      onChange={onChange}
      helperText={touched && !properties.valid && properties.error}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {touched && properties.valid && <Icon icon={'checkOutline'} width={16} height={16} />}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default memo(EmailField);
