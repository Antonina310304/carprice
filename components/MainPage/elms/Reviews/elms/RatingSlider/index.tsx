import React from 'react';

import { reviewsList, ReviewsRating } from '@components/MainPage/elms/Reviews/data';
import RatingElement from '@components/MainPage/elms/Reviews/elms/RatingElement';

import Slider from '@primitives/Slider';

const RatingSlider = () => {
  return <Slider list={ReviewsRating} sliderLength={reviewsList.length} template={RatingElement} />;
};

export default RatingSlider;
