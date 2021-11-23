import cn from 'classnames';

import { memo, useCallback } from 'react';

import Icon from '@primitives/Icon';

import { burger, iconWrapper } from './style.css';

interface IBurger {
  isOpen: boolean;
  className?: string;
  toggle: (arg: (prevState: boolean) => boolean) => void;
}

const Burger = ({ isOpen, className, toggle }: IBurger) => {
  const handlerClick = useCallback(() => {
    toggle((prevState) => !prevState);
  }, [toggle]);

  return (
    <div className={cn(className, burger)} onClick={handlerClick}>
      {isOpen && <Icon className={iconWrapper} icon={'burgerOpen'} />}
      {!isOpen && <Icon className={iconWrapper} icon={'burgerClose'} />}
    </div>
  );
};

export default memo(Burger);
