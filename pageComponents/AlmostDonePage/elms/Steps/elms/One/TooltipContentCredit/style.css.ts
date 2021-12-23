import { style } from '@vanilla-extract/css';

import fontSizeMap from '@primitives/Typography/css/fontSizeMap';

import spacing from '@utils/spacing';

export const text = style({
  ...fontSizeMap['12/18'],
  margin: spacing(0, 0, 1),
  fontWeight: 400,
});

export const wrapper = style({
  marginLeft: spacing(1),
  marginBottom: spacing(0.5),
});
