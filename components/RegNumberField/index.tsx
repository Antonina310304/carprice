import { NextPage } from 'next';
import { memo } from 'react';

import { blockWrapper } from '@components/AutoNumbersBlock/style.css';

import TextMaskCustom from '@primitives/TextMaskCustom';
import WithTextField from '@primitives/WithTextField';

const definitions = { '#': /[а-яА-Я]/ };
const MASK = '#000## 000';
const PLACEHOLDER = 'X000XX 000';

interface IRegNumberField {
  value: string;
  name: string;
  onChange: (arg: any) => void;
  valid: boolean | string;
  defaultTouched?: boolean;
  errorText: string;
  [key: string]: any;
}

const RegNumberField: NextPage<IRegNumberField> = function ({
  defaultTouched, value, name, onChange, valid, errorText, ...props
}) {
  return (
    <WithTextField
      className={blockWrapper}
      inputComponent={TextMaskCustom}
      inputProps={{ mask: MASK, definitions }}
      success={valid}
      error={!valid}
      errorText={(!valid && errorText) || ''}
      name={name}
      defaultTouched={defaultTouched}
      value={value}
      onChange={onChange}
      placeholder={PLACEHOLDER}
      {...props}
    />
  );
};

export default memo(RegNumberField);
