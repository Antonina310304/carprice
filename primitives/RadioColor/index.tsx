import cn from 'classnames';

import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';

import Icon from '@primitives/Icon';
import colorMap from '@primitives/RadioColor/colorMap';
import { colorIcons } from '@primitives/RadioColor/list';
import Typography from '@primitives/Typography';

import { globalThemeColorVars } from '@styles/globalTheme';
import IconColor from './IconColor';
import {
  input, wrapper, label, iconCheck, activeCheck, checkedColor, colorList,
} from './style.css';
import { ColorType } from './types';

interface IRadioColor {
  name: string;
  handleChange: (arg: { target: { name: string; value: ColorType } }) => void;
  value: string;
}

const RadioColor: NextPage<IRadioColor> = ({ name, handleChange, value }) => {
  const [hover, setHover] = useState(value);

  const onChange = useCallback(
    (color: ColorType) => {
      const e = {
        target: { name, value: color },
      };
      handleChange(e);
    },
    [handleChange, name],
  );

  const handleHover = useCallback((key) => {
    setHover(key);
  }, []);

  const handleLeave = useCallback(() => {
    setHover(value);
  }, [value]);

  return (
    <div className={wrapper}>
      <div className={colorList} onMouseLeave={handleLeave}>
        {Object.keys(colorIcons).map((key) => (
          <React.Fragment key={key}>
            <input onChange={() => onChange(key as ColorType)} className={input} type="radio" name={name} id={key} />
            <label className={label} htmlFor={key} onMouseOver={() => handleHover(key)}>
              <IconColor color={key as ColorType} />
              <Icon
                fill={key === 'white' ? globalThemeColorVars.fillCheck : globalThemeColorVars.white}
                className={cn(iconCheck, key === value && activeCheck)}
                icon="check"
                width={16}
                height={16}
              />
            </label>
          </React.Fragment>
        ))}
      </div>
      <Typography as="p" type="base" className={checkedColor}>
        {colorMap[hover as ColorType]?.name}
      </Typography>
    </div>
  );
};

export default RadioColor;
