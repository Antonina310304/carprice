import { style } from '@vanilla-extract/css';

import { padding } from '@utils/padding';
import { spacing } from '@utils/spacing';

export const blockWrapper = style({
  marginBottom: spacing(2),
});

export const button = style({
  ...padding(2),
});
