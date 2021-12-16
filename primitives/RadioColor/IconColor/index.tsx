import { NextPage } from 'next';
import React from 'react';

import { colorIcons } from '@primitives/RadioColor/list';

import { ColorType } from '../types';
import { icon } from './style.css';

interface IIconColor {
  color: ColorType;
}

const IconColor: NextPage<IIconColor> = ({ color }) => {
  const RenderIcon = colorIcons[color].default;
  return <RenderIcon className={icon} />;
};

export default IconColor;
