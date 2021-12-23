const MIN_LENGTH = 8;
const textError = {
  EMPTY: 'Введите  номерной знак',
  ERROR: 'Номерной знак введён некорректно',
};

const regNumberValidate = (value: string): { valid: boolean; errorText: string } => {
  let errorText: string;
  let valid: boolean;

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

export default regNumberValidate;
