import { style } from '@vanilla-extract/css';

import { spacing } from '@utils/spacing';

import { mediaQueryDesktop } from '@constants/mediaQuery';

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
