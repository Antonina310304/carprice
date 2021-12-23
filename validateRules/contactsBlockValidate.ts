import phoneValidate from '@validateRules/phoneValidate';

const contactsBlockValidate = ({ name, phone }: { name: string, phone: number }) => {
  const statePhone = phoneValidate(phone).valid;

  return statePhone && name;
};

export default contactsBlockValidate;
