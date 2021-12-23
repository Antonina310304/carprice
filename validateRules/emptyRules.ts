const emptyRules = (value: number | string): { valid: boolean; errorText: string } => {
  const MIN_LENGTH = 1;
  const textError = 'Поле не должно быть пустым';

  let errorText = '';
  let valid = true;

  if (value < MIN_LENGTH) {
    errorText = textError;
    valid = false;
  }
  return {
    valid,
    errorText,
  };
};

export default emptyRules;
