import cn from 'classnames';

import type { NextPage } from 'next';
import { memo, ReactNode } from 'react';

import { menuWrapper, wrapperToggle } from './style.css';

interface INavWrapper {
  isOpen: boolean;
  children: ReactNode;
}

const NavWrapper: NextPage<INavWrapper> = ({ isOpen, children }) => {
  return <div className={cn(menuWrapper, wrapperToggle[isOpen ? 'open' : 'close'])}>{children}</div>;
};

export default memo(NavWrapper);
