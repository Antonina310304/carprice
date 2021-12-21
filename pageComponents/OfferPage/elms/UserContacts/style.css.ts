import { style } from '@vanilla-extract/css';

import { spacing } from '@utils/spacing';

export const input = style({
  display: 'inline',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
});

export const wrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing(0, 3),
});
