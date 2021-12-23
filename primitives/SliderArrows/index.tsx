import cn from 'classnames';

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

const SliderArrows: NextPage<ISliderArrows> = function ({
  children,
  handlePrevSlide,
  handleNextSlide,
  className,
  disabledPrev,
  disabledNext,
}) {
  return (
    <div className={cn(wrapper, className)}>
      <button type="button" className={navButton} onClick={handlePrevSlide} disabled={disabledPrev}>
        <Icon className={icon} icon="arrowPrev" width={80} height={32} />
      </button>
      {children}
      <button type="button" className={navButton} disabled={disabledNext} onClick={handleNextSlide}>
        <Icon className={icon} icon="arrowNext" width={80} height={32} />
      </button>
    </div>
  );
};

export default memo(SliderArrows);
