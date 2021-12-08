import { style } from '@vanilla-extract/css';

import { padding } from '@utils/padding';
import { spacing } from '@utils/spacing';

export const blockWrapper = style({
  marginBottom: spacing(2),

  selectors: {
    // ['input']: {
    //   textTransform: 'uppercase',
    // },
  },
});

export const button = style({
  ...padding(2),
});
