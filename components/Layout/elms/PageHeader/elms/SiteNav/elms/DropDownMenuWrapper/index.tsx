import cn from 'classnames';
import type { NextPage } from 'next';

import { wrapper, wrapperToggle } from './style.css';

interface IDropDownMenuWrapper {
  isOpen: boolean;
}

const DropDownMenuWrapper: NextPage<IDropDownMenuWrapper> = ({ isOpen, children }) => {
  return <div className={cn(wrapper, wrapperToggle[isOpen ? 'open' : 'close'])}>{children}</div>;
};

export default DropDownMenuWrapper;
