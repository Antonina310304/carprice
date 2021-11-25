import { style } from '@vanilla-extract/css';

import { fontSizeMap } from '@primitives/Typography/css/fontSizeMap';

import { globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  display: 'flex',
  margin: '-8px -6px',
  padding: 0,
  listStyle: 'none',
  flexWrap: 'wrap',
});

export const styleLink = style({
  display: 'block',
  color: globalThemeColorVars.menuQuaternary,
  padding: '8px 6px',
  ...fontSizeMap['14/20'],
  '@media': {
    'screen and (min-width: 680px)': {
      ...fontSizeMap['16/24'],
    },
  },
});
