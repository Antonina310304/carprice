import { NextPage } from 'next';
import React, { memo, useCallback, useMemo, useState } from 'react';

import { InputAdornment, TextField } from '@mui/material';

import Icon from '@primitives/Icon';
import WithTextField from '@primitives/WithTextField';

interface IEmailField {
  name: string;
  defaultValue: string;
  onChange?: any;
  className?: string;
}

const EmailField: NextPage<IEmailField> = ({ className, name, defaultValue, onChange, valid, error }) => {
  const [touched, setTouched] = useState(false);

  const properties = useMemo(() => {
    const { valid, errorText } = getError(defaultValue);
    return {
      valid: valid,
      error: errorText,
    };
  }, [defaultValue]);

  const handleBlur = useCallback(() => {
    if (touched) return;
    setTouched(true);
  }, [touched]);

  return <WithTextField name={''} value={''} />;
};

export default memo(EmailField);
