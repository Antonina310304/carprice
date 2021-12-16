import { NextPage } from 'next';
import React, { memo } from 'react';

import { Checkbox, FormControlLabel } from '@mui/material';

import Typography from '@primitives/Typography';
import Wrapper from '@primitives/Wrappper';

import { labelStyle, textStyle, wrapper } from './style.css';

import { globalBorderRadius, globalThemeColorVars } from '@styles/globalTheme';

interface ICheckBoxGroup {
  name: string;
  label: string;
  className?: string;
  onCLick?: (arg: any) => void;
  [key: string]: any;
  text?: string;
}

const CheckBoxGroup: NextPage<ICheckBoxGroup> = ({ className, name, label, text, onCLick, ...otherProps }) => {
  return (
    <Wrapper
      className={className}
      borderRadius={globalBorderRadius.base}
      bgColor={globalThemeColorVars.backgroundSecondary}
    >
      <FormControlLabel
        className={wrapper}
        control={<Checkbox sx={{ m: 0, p: 0, mr: 1 }} name={name} {...otherProps} />}
        label={
          <span>
            <Typography as={'span'} type={'main'} className={labelStyle}>
              {label}
            </Typography>
            {text && (
              <Typography as={'span'} type={'main'} className={textStyle}>
                {text}
              </Typography>
            )}
          </span>
        }
      />
    </Wrapper>
  );
};

export default memo(CheckBoxGroup);
