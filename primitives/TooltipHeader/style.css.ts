import { style } from '@vanilla-extract/css';

import fontSizeMap from '@primitives/Typography/css/fontSizeMap';

// eslint-disable-next-line import/prefer-default-export
export const titleStyle = style({
  ...fontSizeMap['12/18'],
  fontWeight: '500',
  margin: '0 0 5px',
});
