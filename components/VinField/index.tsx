import { NextPage } from 'next';

import { blockWrapper } from '@components/AutoNumbersBlock/style.css';

import TextMaskCustom from '@primitives/TextMaskCustom';
import WithTextField from '@primitives/WithTextField';

const definitions = { '#': /[a-zA-Z]/ };
const MASK = '##0######00000000';
const PLACEHOLDER = 'XX0XXXXXX00000000';

interface IVinField {
  value: string;
  name: string;
  onChange: (arg: any) => void;
  valid: boolean | string;
  errorText: string;
  [key: string]: any;
}

const VinField: NextPage<IVinField> = ({ value, name, onChange, valid, errorText, ...props }) => (
  <WithTextField
    className={blockWrapper}
    inputComponent={TextMaskCustom}
    inputProps={{ mask: MASK, definitions: definitions }}
    success={valid}
    error={!valid}
    errorText={(!valid && errorText) || ''}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={PLACEHOLDER}
    {...props}
  />
);

export default VinField;
