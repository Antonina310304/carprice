import { style } from '@vanilla-extract/css';

import fontSizeMap from '@primitives/Typography/css/fontSizeMap';

import spacing from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const carDetailList = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  ...fontSizeMap['14/20'],
});
export const valueStyle = style({
  color: globalThemeColorVars.fontsQuaternary,
});
export const itemStyle = style({
  paddingBottom: spacing(1),

  selectors: {
    '&:last-child': {
      paddingBottom: 0,
    },
  },
});
