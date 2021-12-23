export const mileageRules = (value: number): { valid: boolean; errorText: string } => {
  const textError = 'Поле не должно быть пустым';

  let errorText = '';
  let valid = true;

  if (!value) {
    errorText = textError;
    valid = false;
  }
  return {
    valid,
    errorText,
  };
};

export default mileageRules;
