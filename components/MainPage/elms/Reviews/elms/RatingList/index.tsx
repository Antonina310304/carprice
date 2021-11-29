import cn from 'classnames';

import { NextPage } from 'next';

import RatingElement from '@components/MainPage/elms/Reviews/elms/RatingElement';
import RatingSlider from '@components/MainPage/elms/Reviews/elms/RatingSlider';

import useMediaQuery from '@hooks/useMediaQuery';

import { ReviewsRating } from '../../data';
import { IReviewsStars } from '../../types';
import { wrapper } from './style.css';

import { mediaQueryTablet } from '@constants/mediaQuery';

interface IRatingList {
  className?: string;
}

const RatingList: NextPage<IRatingList> = ({ className }) => {
  const isTablet = useMediaQuery(mediaQueryTablet);
  return (
    <div className={cn(className, wrapper)}>
      {isTablet && ReviewsRating.map((ratingItem: IReviewsStars, idx) => <RatingElement key={idx} item={ratingItem} />)}
      {!isTablet && <RatingSlider />}
    </div>
  );
};

export default RatingList;
