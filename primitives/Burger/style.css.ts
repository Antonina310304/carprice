import { style } from '@vanilla-extract/css';

import { mediaQueryTablet } from '@constants/mediaQuery';

export const headerTop = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const burger = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  height: '40px',
  width: '40px',

  zIndex: '3',
});

export const iconWrapper = style({
  width: '25px',
  height: '24px',
  '@media': {
    [mediaQueryTablet]: {
      width: 'auto',
      height: '31px',
    },
  },
});
