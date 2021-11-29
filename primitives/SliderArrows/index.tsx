import cn from 'classnames';
import { log } from 'util';

import { NextPage } from 'next';
import { memo, ReactNode } from 'react';

import Icon from '@primitives/Icon';

import { icon, navButton, wrapper } from './style.css';

interface ISliderArrows {
  children?: ReactNode;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
  disabledPrev: boolean;
  disabledNext: boolean;
  className?: string;
}

const SliderArrows: NextPage<ISliderArrows> = ({
  children,
  handlePrevSlide,
  handleNextSlide,
  className,
  disabledPrev,
  disabledNext,
}) => {
  return (
    <div className={cn(wrapper, className)}>
      <button className={navButton} onClick={handlePrevSlide} disabled={disabledPrev}>
        <Icon className={icon} icon={'arrowPrev'} width={80} height={32}></Icon>
      </button>
      {children}
      <button className={navButton} disabled={disabledNext} onClick={handleNextSlide}>
        <Icon className={icon} icon={'arrowNext'} width={80} height={32}></Icon>
      </button>
    </div>
  );
};

export default memo(SliderArrows);
