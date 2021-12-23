import { style } from '@vanilla-extract/css';

import fontSizeMap from '@primitives/Typography/css/fontSizeMap';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  fontWeight: 500,
  margin: 0,
  color: globalThemeColorVars.white,
  borderRadius: '50%',
  background: globalThemeColorVars.fontsGray,
  transition: `background ${globalThemeDurationVars.m250} ease-in`,
  fontSize: 18,
  lineHeight: 30,
  '@media': {
    [mediaQueryDesktop]: {
      ...fontSizeMap['20/30'],
      width: '32px',
      height: '32px',
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
