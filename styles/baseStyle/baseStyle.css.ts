import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop, mediaQueryMobile } from '@constants/mediaQuery';

export const mainContainer = style({
  maxWidth: '1032px',
  paddingLeft: '12px',
  paddingRight: '12px',
  width: '100%',
  margin: '0 auto',
  boxSizing: 'border-box',
  '@media': {
    [mediaQueryMobile]: {
      paddingLeft: '15px',
      paddingRight: '15px',
    },
    [mediaQueryDesktop]: {
      padding: '0 64px 0 66px',
      maxWidth: '1162px',
    },
  },
});

export const baseListStyle = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  boxSizing: 'border-box',
});

export const textUppercase = style({
  textTransform: 'uppercase',
});
