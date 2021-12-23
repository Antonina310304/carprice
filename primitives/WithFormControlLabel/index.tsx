import cn from 'classnames';

import { NextPage } from 'next';
import { memo } from 'react';

import { FormControlLabel, Radio } from '@mui/material';

import Typography from '@primitives/Typography';

import { textMedium } from '@styles/baseStyle';
import { formControlStyle, radio } from './style.css';

interface IWithFormControlLabel {
  title?: string;
  subTitle?: string;
  value: string;
  className?: string;
}

const WithFormControlLabel: NextPage<IWithFormControlLabel> = function ({
  className, value, title, subTitle,
}) {
  return (
    <FormControlLabel
      className={cn(className, formControlStyle)}
      control={<Radio className={radio} />}
      value={value}
      label={(
        <>
          {title && (
            <Typography className={textMedium} as="p" type="main" align="left">
              {title}
            </Typography>
          )}
          {subTitle && (
            <Typography as="p" type="lead" align="left">
              {subTitle}
            </Typography>
          )}
        </>
      )}
    />
  );
};

export default memo(WithFormControlLabel);
