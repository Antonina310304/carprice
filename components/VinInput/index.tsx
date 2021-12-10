import { NextPage } from 'next';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InputAdornment, TextField } from '@mui/material';

import Icon from '@primitives/Icon';
import TextMaskCustom from '@primitives/TextMaskCustom';

import { changeCarData } from '@store/carSlice';

import { regEmail } from '@utils/regExp';
import { spacing } from '@utils/spacing';

const textError = {
  EMPTY: 'Введите  VIN-номер',
  ERROR: 'VIN-номер введён некорректно',
};
const NAME_FIELD = 'vin';

const MASK = '##0######00000000';
const PLACEHOLDER = 'XX0XXXXXX00000000';
const DEFINITIONS = { '#': /[a-zA-Z]/ };
const MIN_LENGTH = 17;

const getError = (value: string): { valid: boolean; errorText: string } => {
  let errorText: string, valid: boolean;

  if (value.length === 0) {
    errorText = textError.EMPTY;
    valid = false;
  } else {
    valid = value.length === MIN_LENGTH;
    errorText = valid ? '' : textError.ERROR;
  }

  return {
    valid,
    errorText,
  };
};

//TODO передалать компонент
const VinInput: NextPage = ({ className }) => {
  const { vin } = useSelector((state: any) => state.carData);
  const validate = getError(vin);
  const [state, setState] = useState({
    value: vin,
    touched: vin === '' ? false : true,
    valid: validate.valid,
    error: validate.errorText,
  });

  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target: { value } }) => {
      const { valid, errorText } = getError(value);
      setState((prevState) => ({ ...prevState, value, valid, error: errorText }));
      dispatch(changeCarData({ key: vin, value: value }));
    },
    [dispatch, vin]
  );

  const handleBlur = useCallback(() => {
    setState((prevState) => ({ ...prevState, touched: true }));
  }, []);

  return (
    <TextField
      className={className}
      style={{ marginBottom: spacing(1) }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {state.touched && state.valid && <Icon icon={'checkOutline'} width={16} height={16} />}
          </InputAdornment>
        ),
        inputComponent: TextMaskCustom,
        inputProps: {
          mask: MASK,
          definitions: DEFINITIONS,
        },
      }}
      {...(state.touched && state.valid ? { focused: true } : {})}
      error={state.touched && !state.valid}
      name={NAME_FIELD}
      fullWidth={true}
      value={state.value}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText={state.touched && !state.valid && state.error}
      placeholder={PLACEHOLDER}
    />
  );
};

export default VinInput;
