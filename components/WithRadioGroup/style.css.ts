import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop, mediaQueryMobileM, mediaQueryTablet, MOBILE_M } from '@constants/mediaQuery';

import { spacing } from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const subCaption = style({
  color: globalThemeColorVars.fontsQuaternary,
  marginBottom: spacing(2),
});

export const label = style({
  cursor: 'pointer',
  width: '100%',
  display: 'block',
  padding: '12px 0',
  //margin: spacing(0),

  '@media': {
    [mediaQueryMobileM]: {
      width: 'auto',
      padding: '0',
      gap: spacing(5, 0),
    },
  },
});

export const groupWrapper = style({
  margin: '-12px 0',
  '@media': {
    [mediaQueryMobileM]: {
      margin: '0',
      gap: spacing(3, 0),
    },
    [mediaQueryDesktop]: {
      gap: spacing(0, 5),
    },
  },
});
