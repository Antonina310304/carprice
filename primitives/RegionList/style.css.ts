import { style } from '@vanilla-extract/css';

import { mediaQueryMobileM, mediaQueryTablet } from '@constants/mediaQuery';

import { padding } from '@utils/padding';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const list = style({
  width: '100%',
  display: 'grid',
  gridGap: '0 10px',
  maxHeight: 'none',

  '@media': {
    [mediaQueryMobileM]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [mediaQueryTablet]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
});

export const item = style({
  cursor: 'pointer',
  ...padding(1, 0),
  color: globalThemeColorVars.fontsPrimary,
  transition: `color ${globalThemeDurationVars.m250} ease-in-out`,

  ':hover': {
    color: globalThemeColorVars.fontsSecondary,
    transition: `color ${globalThemeDurationVars.m250} ease-in-out`,
  },
});
