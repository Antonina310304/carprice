import { regEmail } from '@utils/regExp';

const mailRules = (value: string): { valid: boolean; errorText: string } => {
  const textError = {
    EMPTY: 'Поле должно быть заполнено',
    ERROR: 'E-mail адрес введен некорректно',
  };

  let errorText: string, valid: boolean;

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

export default mailRules;
