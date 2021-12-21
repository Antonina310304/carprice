import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { spacing } from '@utils/spacing';

const wrapper = style({
  marginBottom: spacing(2),
  '@media': {
    [mediaQueryDesktop]: {
      marginBottom: spacing(6),
    },
  },
});

export default wrapper;
