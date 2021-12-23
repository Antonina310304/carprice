import { NextPage } from 'next';
import { useCallback, useMemo } from 'react';

import CustomRating from '@primitives/CustomRating';
import Typography from '@primitives/Typography';
import Wrapper from '@primitives/Wrappper';

import useMediaQuery from '@hooks/useMediaQuery';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import spacing from '@utils/spacing';

import { link } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';
import { IReviewsList } from '../../types';
import {
  auto, rating, review, wrapper,
} from './style.css';

const buttonText = {
  SHOW: 'Читать весь отзыв',
  HIDE: 'Скрыть отзыв',
};

interface IReviewsSlide {
  item: IReviewsList;
  showReview: boolean;
  // eslint-disable-next-line no-shadow
  setShowReview: (arg: (arg: boolean) => boolean) => void;
}
const MAX_LENGTH_TEXT = 110;
const ReviewsSlide: NextPage<IReviewsSlide> = function ({ showReview, setShowReview, item }) {
  const isDesktop = useMediaQuery(mediaQueryDesktop);
  const isLongReview = useMemo(() => item.review.length > MAX_LENGTH_TEXT, [item.review]);

  const slicedText = useMemo(() => (
    isLongReview
      ? `${item.review.substring(0, MAX_LENGTH_TEXT)}...`
      : item.review), [isLongReview, item.review]);

  const toggleReview = useCallback(() => {
    setShowReview((prevState) => !prevState);
  }, [setShowReview]);

  return (
    <Wrapper
      className={review}
      bgColor={globalThemeColorVars.backgroundSecondary}
      padding={isDesktop ? spacing(2, 3) : spacing(2)}
      borderRadius={8}
    >
      <CustomRating className={rating} defaultValue={item.rating} />
      <Typography type="main" style={{ padding: spacing(0, 0, 2) }}>
        {!showReview && slicedText}
        {showReview && item.review}
      </Typography>
      <div className={wrapper}>
        <Typography type="main" as="span" style={{ fontWeight: 500 }}>
          {item.name}
        </Typography>
        {' | '}
        <Typography type="main" as="span" className={auto}>
          {`Продал ${item.auto}`}
        </Typography>
      </div>
      {isLongReview && (
        <Typography type="main" className={link} onClick={toggleReview}>
          {showReview && buttonText.HIDE}
          {!showReview && buttonText.SHOW}
        </Typography>
      )}
    </Wrapper>
  );
};

export default ReviewsSlide;
