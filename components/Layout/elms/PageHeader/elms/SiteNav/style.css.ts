import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

export const list = style({
  padding: 0,
  margin: 0,
  listStyle: 'none',

  '@media': {
    [mediaQueryDesktop]: {
      display: 'flex',
      margin: '0 -16px',
    },
  },
});

export const lisItem = style({});
