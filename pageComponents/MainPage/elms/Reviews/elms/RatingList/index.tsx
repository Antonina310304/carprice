import cn from 'classnames';

import { NextPage } from 'next';

import useMediaQuery from '@hooks/useMediaQuery';

import { mediaQuery670, mediaQueryTablet } from '@constants/mediaQuery';

import { ReviewsRating } from '../../data';
import { IReviewsStars } from '../../types';
import RatingElement from '../RatingElement';
import RatingSlider from '../RatingSlider';
import { wrapper } from './style.css';

interface IRatingList {
  className?: string;
}

const RatingList: NextPage<IRatingList> = function ({ className }) {
  const isTablet = useMediaQuery(mediaQuery670);

  return (
    <div className={cn(className, wrapper)}>
      {isTablet && ReviewsRating.map((ratingItem: IReviewsStars, idx) => <RatingElement key={idx} item={ratingItem} />)}
      {!isTablet && <RatingSlider />}
    </div>
  );
};

export default RatingList;
