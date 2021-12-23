import Carousel from '@primitives/Carousel';

import { ReviewsRating } from '../../data';
import RatingElement from '../RatingElement';

const RatingSlider = function () {
  return <Carousel data={ReviewsRating} slideTemplate={RatingElement} slideWith="197px" spaceBetween={16} />;
};

export default RatingSlider;
