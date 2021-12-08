import { NextPage } from 'next';
import React, { useState } from 'react';

import RatingElement from '@pages/MainPage/elms/Reviews/elms/RatingElement';

import Carousel from '@primitives/Carousel';
import Slider from '@primitives/Slider';

import useMediaQuery from '@hooks/useMediaQuery';

import { DESKTOP, mediaQueryDesktop } from '@constants/mediaQuery';

import { reviewsList, ReviewsRating } from '../../data';
import ReviewsSlide from '../ReviewsSlide';

import '@styles/globalTheme/index.css';

interface IReviewsSlider {
  className?: string;
}
const ReviewsSlider: NextPage<IReviewsSlider> = ({ className }) => {
  const [showReview, setShowReview] = useState(false);
  const isDesktop = useMediaQuery(mediaQueryDesktop);

  return (
    <div className={className}>
      <Carousel
        navigation={true}
        data={reviewsList}
        showReview={showReview}
        setShowReview={setShowReview}
        slideTemplate={ReviewsSlide}
        slideWith={isDesktop ? '100%' : '85%'}
        spaceBetween={16}
      />
    </div>
  );
};

export default ReviewsSlider;
