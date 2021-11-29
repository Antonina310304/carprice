import { style } from '@vanilla-extract/css';

import { spacing } from '@utils/spacing';

import { globalBorderRadius } from '@styles/globalTheme';

export const dotsWrapper = style({
  margin: '0 24px',
});

export const dotsMobileWrapper = style({
  margin: '16px 24px 0',
  justifyContent: 'center',
});

export const arrowsWrapper = style({
  marginTop: spacing(2),
  marginLeft: '12px',
  marginRight: '12px',
});

export const slider = style({
  overflow: 'hidden',
  borderRadius: globalBorderRadius.medium,
});

export const slide = style({
  display: 'flex',
  margin: '0 12px',
  width: '100%',
});

export const slideWrapper = style({
  display: 'flex',
});
