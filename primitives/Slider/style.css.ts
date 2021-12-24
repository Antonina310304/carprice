import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { spacing } from '@utils/spacing';

import { globalBorderRadius } from '@styles/globalTheme';

export const dotsWrapper = style({
  margin: spacing(0, 3),
});

export const dotsMobileWrapper = style({
  margin: spacing(2, 3, 0),
  justifyContent: 'center',
});

export const wrapper = style({
  overflow: 'hidden',
  width: '100%',
});

export const mainWrapper = style({
  margin: spacing(0, -1),
  '@media': {
    [mediaQueryDesktop]: {
      margin: spacing(0, -1.5),
    },
  },
});

export const arrowsWrapper = style({
  marginTop: spacing(2),
  marginLeft: spacing(1),
  marginRight: spacing(1),
  '@media': {
    [mediaQueryDesktop]: {
      marginLeft: spacing(0, 1.5),
      marginRight: spacing(0, 1.5),
    },
  },
});

export const slider = style({
  overflow: 'visible',
  borderRadius: globalBorderRadius.medium,
});

export const slide = style({
  display: 'flex',
  margin: spacing(0, 1),
  width: '100%',
  '@media': {
    [mediaQueryDesktop]: {
      margin: spacing(0, 1.5),
    },
  },
});

export const slideWrapper = style({
  display: 'flex',
});
