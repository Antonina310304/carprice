import Image from 'next/image';
import React from 'react';

import Typography from '@primitives/Typography';

import useMediaQuery from '@hooks/useMediaQuery';

import { DESKTOP } from '@constants/mediaQuery';

import RatingList from './elms/RatingList';
import ReviewsSlider from './elms/ReviewsSlider';

import { titleBlock } from '../HowItWorks/style.css';
import {
  grid,
  img,
  ratingListInner,
  ratingListWrapper,
  reviewsSliderInner,
  sliderWrap,
  sliderWrapper,
} from './styles.css';

const TITLE = 'Что говорят клиенты ';
const SUBTITLE = 'Мы выкупили уже 220 000 автомобилей, получили множество довольных отзывов и оценок. Убедитесь сами! ';

const Reviews = () => {
  const isDesktop = useMediaQuery(`(min-width: ${DESKTOP}px)`);
  return (
    <>
      <div className={titleBlock}>
        <Typography as={'h2'} type={'sectionTitle'} align={'center'}>
          {TITLE}
        </Typography>
        <Typography as={'h3'} type={'sectionSubTitle'} align={'center'}>
          {SUBTITLE}
        </Typography>
      </div>
      <div className={grid}>
        {isDesktop && (
          <div className={img}>
            <Image src={'/static/images/reviews.svg'} width={'240px'} height={'399px'} alt={'Отзывы'} />
          </div>
        )}
        <div className={sliderWrapper}>
          <div className={ratingListWrapper}>
            <RatingList className={ratingListInner} />
          </div>
          <div className={sliderWrap}>
            <ReviewsSlider className={reviewsSliderInner} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
