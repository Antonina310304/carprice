import cn from 'classnames';

import { NextPage } from 'next';
import React, { useCallback, useMemo, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Dots from '@primitives/Dots';
import SliderArrows from '@primitives/SliderArrows';

import useMediaQuery from '@hooks/useMediaQuery';

import { DESKTOP } from '@constants/mediaQuery';

import { arrowsWrapper, dotsMobileWrapper, dotsWrapper, mainWrapper, slide, slider, slideWrapper } from './style.css';

interface ISlider {
  sliderLength: number;
  className?: string;
  list?: any[];
  template: any;
  [key: string]: any;
}

const Slider: NextPage<ISlider> = ({ template, list, className, sliderLength, ...props }) => {
  const isDesktop = useMediaQuery(`(min-width: ${DESKTOP}px)`);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const lastSlideIndex = useMemo(() => sliderLength - 1, [sliderLength]);
  const Template = useMemo(() => template, [template]);
  const normalizedNewCurrent = useCallback(
    (index) => {
      if (index >= lastSlideIndex) {
        return lastSlideIndex;
      }
      if (index < 0) {
        return 0;
      }
      return index;
    },
    [lastSlideIndex]
  );

  const onChangeIndex = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevSlide) => normalizedNewCurrent(prevSlide + 1));
  }, [normalizedNewCurrent]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => normalizedNewCurrent(prev - 1));
  }, [normalizedNewCurrent]);

  return (
    <div className={cn(className, slider)}>
      <SwipeableViews
        slideStyle={{ boxSizing: 'border-box' }}
        slideClassName={slideWrapper}
        style={{ overflowX: 'visible' }}
        className={mainWrapper}
        index={currentIndex}
        enableMouseEvents
        onChangeIndex={onChangeIndex}
      >
        {list?.map((i, idx) => (
          <div className={slide} key={idx}>
            <Template key={idx} item={i} {...props} />
          </div>
        ))}
      </SwipeableViews>
      {!isDesktop && <Dots className={dotsMobileWrapper} count={sliderLength} activeElement={currentIndex} />}
      {isDesktop && (
        <SliderArrows
          className={arrowsWrapper}
          disabledPrev={currentIndex == 0}
          disabledNext={currentIndex == lastSlideIndex}
          handlePrevSlide={prevSlide}
          handleNextSlide={nextSlide}
        >
          <Dots className={dotsWrapper} count={sliderLength} activeElement={currentIndex} />
        </SliderArrows>
      )}
    </div>
  );
};

export default Slider;
