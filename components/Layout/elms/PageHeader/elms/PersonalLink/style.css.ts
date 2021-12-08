import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const personal = style({
  color: globalThemeColorVars.linkPrimary,
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '24px',
  transition: `color ${globalThemeDurationVars.m250} ease-in-out`,
  marginLeft: 'auto',

  ':hover': {
    color: globalThemeColorVars.linkHoverPrimary,
    transition: `color ${globalThemeDurationVars.m250} ease-in-out`,
    textDecoration: 'none',
  },
});

export const enterIconWrapper = style({
  marginLeft: '5px',
  '@media': {
    [mediaQueryDesktop]: {
      marginLeft: '12px',
    },
  },
});

export const iconSvg = style({
  transition: `fill ${globalThemeDurationVars.m250} ease-in-out`,
  selectors: {
    [`${personal}:hover &`]: {
      fill: globalThemeColorVars.fillDark,
      transition: `fill ${globalThemeDurationVars.m250} ease-in-out`,
    },
  },
});
