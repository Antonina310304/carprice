import { NextPage } from 'next';
import React, { useCallback } from 'react';
import { IMaskInput } from 'react-imask';

interface ITextMaskCustom {
  onChange?: (arg: any) => any;
  mask?: string;
  definitions?: {
    [key: string]: any;
  };
  [key: string]: any;
}

const TextMaskCustom: NextPage<ITextMaskCustom> = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, mask, definitions, ...other } = props;

  const handleAccept = useCallback((value) => {
    if (onChange) {
      onChange({ target: { name: props.name, value } });
    }
  }, []);
  return (
    <IMaskInput
      {...other}
      mask={mask}
      {...(definitions ? { definitions: definitions } : {})}
      onAccept={handleAccept}
      overwrite
    />
  );
});

export default TextMaskCustom;
