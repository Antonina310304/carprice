import { style, styleVariants } from '@vanilla-extract/css';

import { mediaQueryTablet } from '@constants/mediaQuery';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const menuWrapper = style({
  position: 'fixed',
  top: '55px',
  overflowY: 'auto',
  bottom: 0,
  zIndex: 5,
  background: globalThemeColorVars.backgroundPrimary,
  width: '100%',
  transition: `transform ${globalThemeDurationVars.m150} ease-in`,
  '@media': {
    [mediaQueryTablet]: {
      top: '64px',
    },
  },
});

export const wrapperToggle = styleVariants({
  open: { transform: 'translateX(0)' },
  close: { transform: 'translateX(-100%)' },
});
