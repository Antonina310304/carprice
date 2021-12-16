import { style } from '@vanilla-extract/css';

import { fontSizeMap } from '@primitives/Typography/css/fontSizeMap';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { padding } from '@utils/padding';

import { globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  margin: 0,
  minHeight: '56px',
  ...padding(1),
  width: '100%',
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
});

export const labelStyle = style({
  display: 'block',
  color: globalThemeColorVars.fontsPrimary,
  fontWeight: '500',
});

export const textStyle = style({
  display: 'block',
  ...fontSizeMap['12/18'],
  margin: 0,
  color: globalThemeColorVars.fontsQuaternary,

  '@media': {
    [mediaQueryDesktop]: {
      ...fontSizeMap['14/20'],
    },
  },
});
