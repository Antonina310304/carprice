import cn from 'classnames';

import React, { CSSProperties, forwardRef, memo } from 'react';

import { typographyAlignVariants, typographyVariants } from '@primitives/Typography/css/index.css';
import { TypographyTypes } from '@primitives/Typography/types';

interface ITypographyProps {
  as?: React.FC<any> | React.ComponentClass<any> | string;
  type: TypographyTypes;
  className?: string;
  styles?: CSSProperties;
  align?: 'left' | 'center' | 'right';
  onClick?: (arg: any) => void;
  [name: string]: any;
}

const Typography = (
  { as = 'p', type, className, styles, align = 'left', onClick, ...props }: ITypographyProps,
  ref: React.Ref<HTMLSpanElement>
) => {
  return React.createElement(as, {
    className: cn(typographyVariants[type], typographyAlignVariants[align], className),
    style: styles,
    ref,
    onClick,
    ...props,
  });
};

export default memo(forwardRef(Typography));
