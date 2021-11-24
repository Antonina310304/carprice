import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const list = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export const title = style({
  display: 'block',
  padding: '10px 24px',
  margin: 0,
  fontSize: '14px',
  lineHeight: '20px',
  color: globalThemeColorVars.menuPrimary,
  textDecoration: 'none',
  '@media': {
    [mediaQueryDesktop]: {
      padding: '4px 16px',
      fontSize: '16px',
      lineHeight: '24px',
      transition: `color ${globalThemeDurationVars.m250} ease-in-out`,

      ':hover': {
        color: globalThemeColorVars.menuSecondary,
        transition: `color ${globalThemeDurationVars.m250} ease-in-out`,
      },
    },
  },
});
