import axios from 'axios';

import Router from 'next/router';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import NumOfferForm from '@components/AutoNumbersBlock/elms/NumOfferForm';

import { changeCarDetail } from '@store/carSlice';

import { SERVER_ERROR_TEXT } from '../../constants';

const MIN_LENGTH = 17;
const definitions = { '#': /[a-zA-Z]/ };
const textError = {
  EMPTY: 'Введите  VIN-номер',
  ERROR: 'VIN-номер введён некорректно',
};

const VinForm = () => {
  const fieldName = 'vin';
  const dispatch = useDispatch();

  const validate = useCallback((values: any) => {
    let errors = {};
    if (!values) return;
    if (!values[fieldName]) {
      errors = { ...errors, [fieldName]: textError.EMPTY };
    } else if (values[fieldName].length < MIN_LENGTH) {
      errors = { ...errors, [fieldName]: textError.ERROR };
    }
    return errors;
  }, []);

  const onSubmit = useCallback((values, { setFieldError, setSubmitting }) => {
    const showErrors = (errors: any[]) => {
      errors.forEach((error: any) => {
        setFieldError(error.name, error.text);
      });
    };

    async function load() {
      axios
        .get(`http://localhost:4200/${fieldName}?vin=${values.vin}`)
        .then(function (response) {
          setSubmitting(false);
          const data = response.data;

          if (data.error === 'true') {
            showErrors(data.errors);
          } else {
            dispatch(changeCarDetail(data.data));
            Router.push('/almost_done');
          }
        })
        .catch(function () {
          showErrors([{ name: fieldName, text: SERVER_ERROR_TEXT }]);
          setSubmitting(false);
        });
    }
    load();
  }, []);

  return (
    <NumOfferForm
      name={fieldName}
      mask={'##0######00000000'}
      placeholder={'XX0XXXXXX00000000'}
      validate={validate}
      definitions={definitions}
      onSubmit={onSubmit}
    />
  );
};

export default VinForm;
