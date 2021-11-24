import cn from 'classnames';

import { NextPage } from 'next';
import React, { CSSProperties } from 'react';

import { typographyAlignVariants, typographyVariants } from '@primitives/Typography/css/index.css';

import { globalThemeColorVars } from '@styles/globalTheme';

interface ITypography {
  as?: React.FC<any> | React.ComponentClass<any> | string;
  type: string;
  className?: string;
  styles?: CSSProperties;
  align?: 'left' | 'center' | 'right';
  color?: string;
  onClick?: (arg: any) => any;
  [name: string]: any;
}

const Typography: NextPage<ITypography> = ({
  as = 'p',
  type,
  className,
  styles,
  align = 'left',
  color,
  onClick,
  ...props
}) => {
  return React.createElement(as, {
    className: cn(typographyVariants[type], typographyAlignVariants[align], className),
    style: { color, ...styles },
    onClick,
    ...props,
  });
};

export default Typography;
