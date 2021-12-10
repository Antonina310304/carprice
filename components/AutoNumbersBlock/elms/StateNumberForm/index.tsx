import axios from 'axios';

import { NextPage } from 'next';
import React, { memo, useCallback } from 'react';

import NumOfferForm from '@components/NumOfferForm';

import { SERVER_ERROR_TEXT } from '../../constants';

const MIN_LENGTH = 8;
const definitions = { '#': /[а-яА-Я]/ };
const textError = {
  EMPTY: 'Введите  номерной знак',
  ERROR: 'Номерной знак введён некорректно',
};

const StateNumberForm: NextPage = () => {
  const fieldName = 'number';

  const validate = useCallback((values: any) => {
    let errors = {};
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
        .get(`http://localhost:4200/${fieldName}?number=${values.number}`)
        .then(function (response) {
          const data = response.data;
          if (data.error === 'true') {
            showErrors(data.errors);
          }
        })
        .catch(function (error) {
          console.log(error);
          setSubmitting(false);
          showErrors([{ name: fieldName, text: SERVER_ERROR_TEXT }]);
        });
    }
    load();
  }, []);

  return (
    <NumOfferForm
      name={fieldName}
      mask={'#000## 000'}
      placeholder={'X000XX 000'}
      validate={validate}
      definitions={definitions}
      onSubmit={onSubmit}
    />
  );
};

export default memo(StateNumberForm);
