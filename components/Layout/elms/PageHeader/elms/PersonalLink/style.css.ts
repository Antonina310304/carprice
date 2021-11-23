import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { globalThemeColorVars } from '@styles/globalTheme';
import Theme from '@styles/theme';

export const personal = style({
  color: globalThemeColorVars.linkPrimary,
  display: 'flex',
  justifyContent: 'center',
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '24px',
  transition: `color ${Theme.durations.m250} ease-in-out`,
  marginLeft: 'auto',

  ':hover': {
    color: globalThemeColorVars.linkHoverPrimary,
    transition: `color ${Theme.durations.m250} ease-in-out`,
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
  transition: `fill ${Theme.durations.m250} ease-in-out`,
  selectors: {
    [`${personal}:hover &`]: {
      fill: globalThemeColorVars.fillDark,
      transition: `fill ${Theme.durations.m250} ease-in-out`,
    },
  },
});
