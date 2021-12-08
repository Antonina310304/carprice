import { style } from '@vanilla-extract/css';

import { mediaQuery670, mediaQueryDesktop, mediaQueryMobile, mediaQueryTablet } from '@constants/mediaQuery';

import { spacing } from '@utils/spacing';

export const flex = style({
  display: 'flex',
});

export const grid = style({
  '@media': {
    [mediaQueryDesktop]: {
      display: 'grid',
      gridGap: spacing(3),
      gridTemplateColumns: 'auto',
      gridTemplateRows: 'auto',
    },
  },
});

export const sliderWrapper = style({
  '@media': {
    [mediaQueryDesktop]: {
      overflow: 'hidden',
      gridRow: '1',
      gridColumn: '3',
      gridColumnStart: 2,
      gridColumnEnd: 5,
    },
  },
});

export const ratingListWrapper = style({
  paddingBottom: '24px',

  overflow: 'hidden',
  margin: '0 -12px',

  '@media': {
    [mediaQueryMobile]: {
      margin: '0 -15px',
    },
    [mediaQuery670]: {
      paddingBottom: 0,
      margin: '0',
    },
  },
});

export const sliderWrap = style({
  overflow: 'hidden',
  margin: '0 -12px',

  '@media': {
    [mediaQueryMobile]: {
      margin: '0 -15px',
    },
  },
});

export const ratingListInner = style({
  width: '100%',
  '@media': {
    [mediaQuery670]: {
      width: '100%',
    },
  },
});

export const reviewsSliderInner = style({});

export const img = style({
  flex: '0 0 auto',
  width: '240px',
  gridRow: '1',
  gridColumn: '1',
  gridRowStart: 1,
  gridRowEnd: 2,
});
