import { style } from '@vanilla-extract/css';

import { padding } from '@utils/padding';

export const wrapper = style({
  ...padding(2, 2),
});
