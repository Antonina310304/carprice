import { useCallback, useMemo, useState } from 'react';

const MIN_LENGTH = 8;

const textError = {
  EMPTY: 'Введите  номерной знак',
  ERROR: 'Номерной знак введён некорректно',
};

const getError = (value: string): { valid: boolean; errorText: string } => {
  let errorText: string, valid: boolean;

  if (value.length === 0) {
    errorText = textError.EMPTY;
    valid = false;
  } else {
    valid = value.length >= MIN_LENGTH;
    errorText = valid ? '' : textError.ERROR;
  }

  return {
    valid,
    errorText,
  };
};

const useStateNumber = (initialValue: string) => {
  const validate = useMemo(() => {
    return getError(initialValue);
  }, [initialValue]);

  const [state, setState] = useState({
    value: initialValue,
    touched: initialValue !== '',
    valid: validate.valid,
    errorText: validate.errorText,
  });

  const handleBlur = useCallback(() => {
    setState((prevState) => ({ ...prevState, touched: true }));
  }, []);

  const handleChange = useCallback(({ target: { value } }) => {
    const { valid, errorText } = getError(value);
    setState((prevState) => ({ ...prevState, value, valid, errorText: errorText }));
  }, []);

  const setErrors = useCallback(({ valid, errorText }) => {
    setState((prevState) => ({ ...prevState, valid, errorText }));
  }, []);

  const setValue = useCallback((newValue) => {
    const errors = getError(newValue);
    setState({
      value: newValue,
      touched: newValue !== '',
      valid: errors.valid,
      errorText: errors.errorText,
    });
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

export default useStateNumber;
