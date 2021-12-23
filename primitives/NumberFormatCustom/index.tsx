import { NextPage } from 'next';
import { forwardRef, memo } from 'react';
import NumberFormat from 'react-number-format';

interface INumberFormatCustom {
  name: string;
  value: string | number;
  onChange: (arg: any) => void;
  [key: string]: any;
}

const NumberFormatCustom: NextPage<INumberFormatCustom> = forwardRef((
  {
    name, value, onChange, ...other
  },
  ref,
) => (
  <NumberFormat
    {...other}
    suffix={` ${other.postfix}`}
    getInputRef={ref}
    value={value}
    onValueChange={onChange}
    thousandSeparator={' '}
    isNumericString
  />
));

NumberFormatCustom.displayName = 'NumberFormatCustom';
export default memo(NumberFormatCustom);
