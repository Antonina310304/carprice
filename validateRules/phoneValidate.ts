export const phoneValidate = (value: number): { valid: boolean; errorText: string } => {
  const LENGTH = 10;
  const textError = {
    EMPTY: 'Поле не должно быть пустым',
    ERROR: 'Введите корректный номер телефона',
  };

  let errorText = '',
    valid = true;

  if (!value) {
    errorText = textError.EMPTY;
    valid = false;
  } else if (value.toString().length !== LENGTH) {
    errorText = textError.ERROR;
    valid = false;
  }
  return {
    valid,
    errorText,
  };
};

export default phoneValidate;
