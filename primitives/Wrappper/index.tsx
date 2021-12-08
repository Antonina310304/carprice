import React, { CSSProperties, forwardRef, memo, ReactNode, Ref, useMemo } from 'react';

import BackgroundColors from '@styles/theme/types/BackgroundColors';

interface IWrapper {
  className?: string;
  as: string;
  styles?: CSSProperties;
  spacing?: any;
  padding?: any;
  borderRadius?: number;
  bgColor?: BackgroundColors;
  children?: ReactNode;
  [name: string]: any;
}

const Wrapper = forwardRef(function (props: IWrapper, ref: Ref<HTMLInputElement>) {
  const { styles, as = 'div', className, spacing, bgColor, children, padding, borderRadius, ...otherProps } = props;
  return React.createElement(
    as,
    {
      className: className,
      style: {
        ...styles,
        boxSizing: 'border-box',
        backgroundColor: bgColor,
        borderRadius,
        padding: padding,
        margin: spacing?.m,
      },
      ref,
      ...otherProps,
    },
    children
  );
});

Wrapper.displayName = 'Wrapper';

export default memo(Wrapper);
