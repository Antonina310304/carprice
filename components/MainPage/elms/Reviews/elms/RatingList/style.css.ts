import { style } from '@vanilla-extract/css';

import { spacing } from '@utils/spacing';

import { mediaQueryTablet } from '@constants/mediaQuery';

export const wrapper = style({
  '@media': {
    [mediaQueryTablet]: {
      display: 'flex',
      width: '100%',
      gap: spacing(0, 3),
      paddingBottom: spacing(3),
    },
  },
});
