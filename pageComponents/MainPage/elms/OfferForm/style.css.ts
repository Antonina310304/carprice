import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { padding } from '@utils/padding';

export const offerFormWrapper = style({
  ...padding(2),
  '@media': {
    [mediaQueryDesktop]: {
      ...padding(4),
    },
  },
});
