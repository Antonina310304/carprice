import { forwardRef, ReactNode, Ref } from 'react';

interface IWrapper {
  className?: string;
  styles?: any;
  children?: ReactNode;
  [name: string]: any;
}

const Wrapper = forwardRef(function (props: IWrapper, ref: Ref<HTMLInputElement>) {
  const { styles, as, className, children, ...otherProps } = props;
  return (
    <div ref={ref} className={className} style={styles} {...otherProps}>
      {children}
    </div>
  );
});

Wrapper.displayName = 'Wrapper';

export default Wrapper;
