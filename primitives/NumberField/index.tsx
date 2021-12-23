import { NextPage } from 'next';
import { memo, useCallback } from 'react';

import NumberFormatCustom from '@primitives/NumberFormatCustom';
import WithTextField from '@primitives/WithTextField';

interface INumberField {
  name: string;
  value: string | number;
  onChange: (arg: any) => void;
  [key: string]: any;
  success: boolean;
  postfix: string;
  error: boolean;
  errorText: string;
}

const NumberField: NextPage<INumberField> = function ({
  postfix,
  success,
  error,
  errorText,
  name,
  value,
  onChange,
  ...props
}) {
  const handleChange = useCallback(
    (target: { floatValue: string; formattedValue: string; value: string }) => {
      const e = {
        target: {
          name,
          value: target.value,
        },
      };
      onChange(e);
    },
    [name, onChange],
  );

  return (
    <WithTextField
      {...props}
      inputProps={{ postfix }}
      // в консоли выпадала ошибка, поэтому сделала строкой
      number={true.toString()}
      success={success}
      inputComponent={NumberFormatCustom}
      error={error}
      errorText={errorText}
      value={value}
      onChange={handleChange}
      name={name}
    />
  );
};

export default memo(NumberField);
