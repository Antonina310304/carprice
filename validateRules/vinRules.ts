export const vinRules = (value: string): { valid: boolean; errorText: string } => {
  const MIN_LENGTH = 17;
  const textError = {
    EMPTY: 'Введите  VIN-номер',
    ERROR: 'VIN-номер введён некорректно',
  };

  let errorText: string, valid: boolean;

  if (value.length === 0) {
    errorText = textError.EMPTY;
    valid = false;
  } else {
    valid = value.length === MIN_LENGTH;
    errorText = valid ? '' : textError.ERROR;
  }

  return {
    valid,
    errorText,
  };
};

export default vinRules;
