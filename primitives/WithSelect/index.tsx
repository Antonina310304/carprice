import cn from 'classnames';

import { NextPage } from 'next';
import React, { memo, useEffect, useMemo, useState } from 'react';

import { CircularProgress, FormControl, InputAdornment, MenuItem, OutlinedInput, Select } from '@mui/material';

import Icon from '@primitives/Icon';

import {
  wrapper,
  icon,
  successIcon,
  disabledIcon,
  progressIcon,
  successProgressIcon,
  useStyles,
  dropDownList,
} from './style.css';

import { globalThemeColorVars } from '@styles/globalTheme';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    className: wrapper,
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface IWithSelect {
  menuItemList: any[];
  name: string;
  className?: string;
  currValue: string;
  disabled?: boolean;
  placeholder: string;
  isLoading: boolean;
  inputProps?: any;
  handleChange: (arg: any) => void;
  [key: string]: any;
}

const WithSelect: NextPage<IWithSelect> = ({
  disabled = false,
  className,
  placeholder,
  menuItemList,
  currValue,
  name,
  handleChange,
  inputProps,
  isLoading,
  ...otherProps
}) => {
  const [changed, setChanged] = useState(false);
  const disabledSelect = useMemo(() => disabled || isLoading, [disabled, isLoading]);

  useEffect(() => {
    setChanged(!!currValue);
  }, [currValue]);

  const classes = useStyles();
  return (
    <FormControl focused={changed} fullWidth>
      <Select
        name={name}
        className={cn(className, classes.root)}
        fullWidth={true}
        displayEmpty
        disabled={disabledSelect}
        value={currValue}
        input={<OutlinedInput />}
        onChange={handleChange}
        endAdornment={
          <InputAdornment
            position="end"
            style={{
              position: 'absolute',
              right: '0',
            }}
          >
            <>
              {isLoading && (
                <CircularProgress
                  style={{ width: '16px', height: '16px' }}
                  className={cn(progressIcon, disabledIcon && successProgressIcon)}
                />
              )}
              {changed && (
                <Icon
                  icon={'checkOutline'}
                  width={16}
                  height={16}
                  className={cn(disabledSelect && disabledIcon, successIcon)}
                />
              )}
            </>
          </InputAdornment>
        }
        IconComponent={(props: any) => (
          <Icon {...props} className={cn(icon, props.className)} icon={'arrowDown'} width={16} height={16} />
        )}
        MenuProps={MenuProps}
        renderValue={(selected) => {
          if (selected?.length === 0) {
            return <span style={{ color: globalThemeColorVars.fontsQuaternary }}>{placeholder}</span>;
          }
          const select = menuItemList.find((item: any) => item.value == selected)?.text;
          if (!select) {
            return <span style={{ color: globalThemeColorVars.fontsQuaternary }}>{placeholder}</span>;
          }

          return select;
        }}
        inputProps={{ ...inputProps, ...{ 'aria-label': 'Without label' } }}
        {...otherProps}
      >
        {menuItemList.map((item: any) => (
          <MenuItem className={dropDownList} key={item.value} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default memo(WithSelect);
