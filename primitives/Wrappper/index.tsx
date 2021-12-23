/* eslint-disable react/require-default-props */
import {
  CSSProperties, forwardRef, memo, ReactNode, Ref, createElement,
} from 'react';

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

const Wrapper = forwardRef((props: IWrapper, ref: Ref<HTMLInputElement>) => {
  const {
    styles, as = 'div', className, spacing, bgColor, children, padding, borderRadius, ...otherProps
  } = props;
  return createElement(
    as,
    {
      className,
      style: {
        ...styles,
        boxSizing: 'border-box',
        backgroundColor: bgColor,
        borderRadius,
        padding,
        margin: spacing?.m,
      },
      ref,
      ...otherProps,
    },
    children,
  );
});

Wrapper.displayName = 'Wrapper';

export default memo(Wrapper);
