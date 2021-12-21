import { NextPage } from 'next';
import { forwardRef, memo, useCallback } from 'react';
import { IMaskInput } from 'react-imask';

const defaultMask = /^\w+$/;

interface ITextMaskCustom {
  onChange?: (arg: any) => any;
  mask?: string;
  definitions?: {
    [key: string]: any;
  };
  [key: string]: any;
}

const TextMaskCustom: NextPage<ITextMaskCustom> = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, mask = defaultMask, definitions, ...other } = props;

  const handleAccept = useCallback(
    (value) => {
      if (onChange) {
        onChange({ target: { name: props.name, value } });
      }
    },
    [onChange, props.name]
  );

  return (
    <IMaskInput
      {...other}
      mask={mask}
      unmask={true}
      {...(definitions ? { definitions: definitions } : {})}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onAccept={handleAccept}
      overwrite
    />
  );
});

export default memo(TextMaskCustom);
