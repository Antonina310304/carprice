import cn from 'classnames';

import { NextPage } from 'next';
import { memo, ReactNode } from 'react';

import { wrapper } from './style.css';

interface IBox {
  children: ReactNode;
  className?: string;
}

const Wrapper: NextPage<IBox> = ({ children, className }) => {
  return <div className={cn(className, wrapper)}>{children}</div>;
};

export default memo(Wrapper);
