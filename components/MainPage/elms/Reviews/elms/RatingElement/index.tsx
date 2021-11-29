import { NextPage } from 'next';
import React from 'react';

import { IReviewsStars } from '@components/MainPage/elms/Reviews/types';

import CustomRating from '@primitives/CustomRating';
import Icon from '@primitives/Icon';
import LinkWrapper from '@primitives/LinkWrapper';
import Typography from '@primitives/Typography';
import Wrapper from '@primitives/Wrappper';

import useMediaQuery from '@hooks/useMediaQuery';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { spacing } from '@utils/spacing';

import declOfNum from '../../../../../../utils/declOfNum';
import { icon, rating, ratingCount, starWrapper, wrapper } from './style.css';

import { globalBorderRadius, globalThemeColorVars } from '@styles/globalTheme';

const units = (count: number) => declOfNum(count, ['отзыв', 'отзыва', 'отзывов']);

interface IRatingElement {
  item: IReviewsStars;
}

const RatingElement: NextPage<IRatingElement> = ({ item }) => {
  const isDesktop = useMediaQuery(mediaQueryDesktop);
  return (
    <Wrapper
      padding={isDesktop ? spacing(2, 3) : spacing(2)}
      bgColor={globalThemeColorVars.backgroundTertiary}
      borderRadius={globalBorderRadius.medium}
      className={rating}
    >
      <Typography className={ratingCount}>{item.rating.toFixed(1)}</Typography>
      <CustomRating className={starWrapper} defaultValue={item.rating} />
      <div className={wrapper}>
        <i className={icon}>
          <Icon icon={item.icon} width={16} height={16} />
        </i>
        <Typography as={'span'} type={'main'} style={{ fontWeight: 500 }}>
          {'Рейтинг '}
        </Typography>
        <LinkWrapper isExternal={true} href={item.link}>
          {item.text}
        </LinkWrapper>
      </div>
      <Typography type={'info'} style={{ color: globalThemeColorVars.fontsSecondary }}>
        {item.reviewsCount} {units(item.reviewsCount)}
      </Typography>
    </Wrapper>
  );
};

export default RatingElement;
