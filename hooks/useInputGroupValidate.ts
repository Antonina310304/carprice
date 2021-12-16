import { useCallback, useMemo, useState } from 'react';

import { TypeField } from '@pages/AlmostDonePage/elms/Steps/elms/One';

const validate = (value, rules) => {
  let textError = '';
  Object.keys(rules).forEach((rule) => {
    if (rule === 'isEmpty' && !value) {
      textError = 'Пустое значение';
    } else if (rule === 'minLength' && value.length < rules[rule]) {
      textError = 'Слишком короткое значение';
    }
  });
  return textError;
};

interface GenericFunctionType {
  <T>(x: T): any;
}

const useInputGroupValidate: GenericFunctionType = (data) => {
  const getState = useMemo(() => {
    return Object.entries(data).reduce(
      (acc, [key, value]) => {
        acc.value[key] = value.value;
        acc.touched[key] = !!value.value;
        acc.errorText[key] = validate(value.value, value.validate);
        acc.valid[key] = !validate(value.value, value.validate);
        return acc;
      },
      { value: {}, touched: {}, errorText: {}, valid: {} }
    );
  }, []);

  const [state, setState] = useState(getState);

  const handleBlur = useCallback(({ target: { name } }) => {
    setState((prevState) => ({ ...prevState, touched: { ...prevState.touched, [name]: true } }));
  }, []);

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      const valid = validate(value, data[name].validate);
      setState((prevState) => ({
        ...prevState,
        value: { ...prevState.value, [name]: value },
        valid: { ...prevState.valid, [name]: !valid },
        errorText: { ...prevState.valid, [name]: valid },
      }));
    },
    [data]
  );

  const setErrors = useCallback(({ valid, errorText }) => {
    setState((prevState) => ({ ...prevState, valid, errorText }));
  }, []);

  const setValue = useCallback((newValue) => {
    // const errors = getError(newValue);
    // setState({
    //   value: newValue,
    //   touched: newValue !== '',
    //   valid: errors.valid,
    //   errorText: errors.errorText,
    // });
  }, []);

  return {
    value: state.value,
    touched: state.touched,
    valid: state.valid,
    errorText: state.errorText,

    handleChange,
    handleBlur,
    setErrors,
    setValue,
  };
};

export default useInputGroupValidate;
