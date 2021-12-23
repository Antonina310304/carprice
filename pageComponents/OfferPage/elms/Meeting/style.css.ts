import { style } from '@vanilla-extract/css';

import padding from '@utils/padding';

// eslint-disable-next-line import/prefer-default-export
export const wrapper = style({
  ...padding(2, 2),
});
