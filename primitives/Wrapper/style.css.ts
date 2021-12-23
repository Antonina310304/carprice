import { style } from '@vanilla-extract/css';

import { mediaQueryMobileM } from '@constants/mediaQuery';

import spacing from '@utils/spacing';

// eslint-disable-next-line import/prefer-default-export
export const wrapper = style({
  marginBottom: spacing(2),

  '@media': {
    [mediaQueryMobileM]: {
      marginBottom: spacing(4),
    },
  },
});
