import { Formik, Form as F } from 'formik';
import { log } from 'util';

import { NextPage } from 'next';
import React, { memo } from 'react';

interface IForm {
  children: (arg: any) => any;
  initialValues: any;
  validate?: any;
  validationSchema?: any;
  onSubmit: any;
}

const Form: NextPage<IForm> = ({ initialValues, validationSchema, validate, onSubmit, children }) => {
  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
        children({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting })
      }
    </Formik>
  );
};

export default memo(Form);
