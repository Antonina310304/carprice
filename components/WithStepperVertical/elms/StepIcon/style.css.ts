import { style } from '@vanilla-extract/css';

import { fontSizeMap } from '@primitives/Typography/css/fontSizeMap';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  fontWeight: 500,
  margin: 0,
  color: globalThemeColorVars.white,
  height: '32px',
  borderRadius: '50%',
  background: globalThemeColorVars.fontsGray,
  transition: `background ${globalThemeDurationVars.m250} ease-in`,
  ...fontSizeMap['20/30'],
  '@media': {
    [mediaQueryDesktop]: {
      ...fontSizeMap['20/30'],
    },
  },
});
export const active = style({
  background: globalThemeColorVars.fillSecondaryLight,
  transition: `background ${globalThemeDurationVars.m250} ease-in`,
});

export const completed = style({
  background: globalThemeColorVars.fontsBaseGreen,
  transition: `background ${globalThemeDurationVars.m250} ease-in`,
});
