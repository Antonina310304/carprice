import { style } from '@vanilla-extract/css';

import { mediaQuery670, mediaQueryDesktop } from '@constants/mediaQuery';

import spacing from '@utils/spacing';

// eslint-disable-next-line import/prefer-default-export
export const wrapper = style({
  '@media': {
    [mediaQuery670]: {
      display: 'flex',
      width: '100%',
      gap: spacing(0, 2),
      paddingBottom: spacing(2),
    },
    [mediaQueryDesktop]: {
      gap: spacing(0, 3),
      paddingBottom: spacing(3),
    },
  },
});
