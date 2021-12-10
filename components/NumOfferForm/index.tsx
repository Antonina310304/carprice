import { Form, Formik } from 'formik';

import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, InputAdornment, TextField } from '@mui/material';

import { BUTTON_TEXT } from '@components/AutoNumbersBlock/constants';
import { button } from '@components/AutoNumbersBlock/style.css';
import { blockWrapper } from '@components/BrandForm/style.css';

import ButtonSubmit from '@primitives/ButtonSubmit/ButtonSubmit';
import Icon from '@primitives/Icon';
import TextMaskCustom from '@primitives/TextMaskCustom';

import { changeCarData } from '@store/carSlice';
import { loadState } from '@store/localStorage';

import { spacing } from '@utils/spacing';

interface INumOfferForm {
  name: string;
  mask: string;
  placeholder: string;
  validate: any;
  onSubmit: any;
  definitions: {
    [key: string]: RegExp;
  };
}

const NumOfferForm: NextPage<INumOfferForm> = ({ name, mask, definitions, placeholder, validate, onSubmit }) => {
  const dispatch = useDispatch();

  const [initialValue, setInitialValue] = useState('');

  useEffect(() => {
    const localStorageData = loadState();
    if (!localStorageData) return;
    const data = localStorageData?.carData;
    if (!data[name]) return;

    setInitialValue(data[name]);
  }, [name]);

  return (
    <Formik
      enableReinitialize
      initialValues={{ [name]: initialValue }}
      validateOnChange={true}
      {...(initialValue !== '' ? { initialTouched: { [name]: true } } : {})}
      validateOnMount={true}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ values, isSubmitting, handleSubmit, handleChange, errors, touched, handleBlur }) => {
        const change = (e: any) => {
          const fieldName = e.target.name;
          const value = e.target.value;
          dispatch(changeCarData({ key: fieldName, value }));
          handleChange(e);
        };

        return (
          <Form onSubmit={handleSubmit}>
            <TextField
              style={{ marginBottom: spacing(1) }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {!errors[name] && touched[name] && <Icon icon={'checkOutline'} width={16} height={16} />}
                  </InputAdornment>
                ),
                inputComponent: TextMaskCustom,
                inputProps: {
                  mask: mask,
                  definitions: definitions,
                },
              }}
              {...(errors[name] && touched[name] ? { error: true } : {})}
              {...(!errors[name] && touched[name] ? { focused: true } : {})}
              name={name}
              fullWidth={true}
              value={values && values[name]}
              onChange={change}
              onBlur={handleBlur}
              helperText={errors[name] && touched[name] && errors[name]}
              placeholder={placeholder}
            />
            <Button
              color="primary"
              disabled={isSubmitting || !!errors[name]}
              className={button}
              variant="contained"
              size="large"
              fullWidth
              type="submit"
            >
              {BUTTON_TEXT}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default NumOfferForm;
