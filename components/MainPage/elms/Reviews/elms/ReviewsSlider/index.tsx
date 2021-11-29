import { NextPage } from 'next';
import React, { useState } from 'react';

import Slider from '@primitives/Slider';

import { reviewsList } from '../../data';
import ReviewsSlide from '../ReviewsSlide';

import '@styles/globalTheme/index.css';

const ReviewsSlider: NextPage = () => {
  const [showReview, setShowReview] = useState(false);

  return (
    <Slider
      list={reviewsList}
      sliderLength={reviewsList.length}
      template={ReviewsSlide}
      showReview={showReview}
      setShowReview={setShowReview}
    />
  );
};

export default ReviewsSlider;
