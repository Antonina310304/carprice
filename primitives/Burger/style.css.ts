import { style } from '@vanilla-extract/css';

import { mediaQueryTablet } from '@constants/mediaQuery';

export const headerTop = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const burger = style({
  height: '24px',
  width: '25px',
  margin: '0',
  zIndex: '3',
  '@media': {
    [mediaQueryTablet]: {
      width: '31px',
      height: '31px',
    },
  },
});

export const iconWrapper = style({
  marginLeft: 'auto',
  width: '100%',
  height: '100%',
  '@media': {
    [mediaQueryTablet]: {
      width: 'auto',
      height: '31px',
    },
  },
});
