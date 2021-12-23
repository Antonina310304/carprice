import { NextPage } from 'next';
import colorIcons from '@primitives/RadioColor/colorIcons';

import { ColorType } from '../types';
import { icon } from './style.css';

interface IIconColor {
  color: ColorType;
}

const IconColor: NextPage<IIconColor> = function ({ color }) {
  const RenderIcon = colorIcons[color].default;
  return <RenderIcon className={icon} />;
};

export default IconColor;
