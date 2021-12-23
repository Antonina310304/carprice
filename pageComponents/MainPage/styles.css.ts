import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import spacing from '@utils/spacing';

// eslint-disable-next-line import/prefer-default-export
export const sectionWrapper = style({
  paddingTop: spacing(8),
  paddingBottom: spacing(8),
  '@media': {
    [mediaQueryDesktop]: {
      paddingTop: '88px',
      paddingBottom: '88px',
    },
  },
});
