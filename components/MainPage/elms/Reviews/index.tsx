import Image from 'next/image';
import React from 'react';

import { titleBlock } from '@components/MainPage/elms/HowItWorks/style.css';
import RatingList from '@components/MainPage/elms/Reviews/elms/RatingList';
import ReviewsSlider from '@components/MainPage/elms/Reviews/elms/ReviewsSlider';

import Typography from '@primitives/Typography';

import useMediaQuery from '@hooks/useMediaQuery';

import { grid, img, ratingListWrapper, sliderWrapper } from './styles.css';

import { DESKTOP } from '@constants/mediaQuery';

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
          <RatingList className={ratingListWrapper} />
          <ReviewsSlider />
        </div>
      </div>
    </>
  );
};

export default Reviews;
