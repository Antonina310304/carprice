import cn from 'classnames';

import React, { CSSProperties, forwardRef, memo } from 'react';

import { typographyAlignVariants, typographyVariants } from '@primitives/Typography/css/index.css';
import { TypographyTypes } from '@primitives/Typography/types';

import { Colors } from '@styles/theme/types';

interface ITypographyProps {
  as?: React.FC<any> | React.ComponentClass<any> | string;
  type: TypographyTypes;
  className?: Colors;
  styles?: CSSProperties;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'inherit';
  onClick?: (arg: any) => void;
  [name: string]: any;
}

const Typography = (
  { as = 'p', type, className, styles, color, align = 'left', onClick, ...props }: ITypographyProps,
  ref: React.Ref<HTMLSpanElement>
) => {
  return React.createElement(as, {
    className: cn(typographyVariants[type], typographyAlignVariants[align], className),
    style: { ...styles, color: color },
    ref,
    onClick,
    ...props,
  });
};

export default memo(forwardRef(Typography));
