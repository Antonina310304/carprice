import React, { CSSProperties, forwardRef, memo, ReactNode, Ref, useEffect } from 'react';

import BackgroundColors from '@styles/theme/types/BackgroundColors';

interface IWrapper {
  className?: string;
  styles?: CSSProperties;
  borderRadius?: number;
  padding?: string;
  bgColor?: BackgroundColors;
  children?: ReactNode;
  [name: string]: any;
}

const WrapperTest = (props: IWrapper) => {
  useEffect(() => {
    console.log('Wrapper перерисовался');
  });

  const { styles, className, bgColor, children, padding, borderRadius, ...otherProps } = props;
  return (
    <div className={className} {...otherProps} style={{ ...styles, backgroundColor: bgColor, borderRadius, padding }}>
      {children}
    </div>
  );
};

export default memo(WrapperTest);
