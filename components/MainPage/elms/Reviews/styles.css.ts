import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

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
      gridRow: '2',
      gridColumn: '3',
      gridColumnStart: 2,
      gridColumnEnd: 5,
    },
  },
});

export const ratingListWrapper = style({
  paddingBottom: '24px',
});

export const img = style({
  flex: '0 0 auto',
  width: '240px',
  gridRow: '1',
  gridColumn: '1',
  gridRowStart: 1,
  gridRowEnd: 3,
});
