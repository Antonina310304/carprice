import { style, styleVariants } from '@vanilla-extract/css';

import { globalThemeColorVars } from '@styles/globalTheme';
import Theme from '@styles/theme';

export const menuWrapper = style({
  position: 'fixed',
  top: '55px',
  bottom: 0,
  zIndex: 5,
  background: globalThemeColorVars.backgroundPrimary,
  width: '100%',
  transition: `transform ${Theme.durations.m150} ease-in`,
});

export const wrapperToggle = styleVariants({
  open: { transform: 'translateX(0)' },
  close: { transform: 'translateX(-100%)' },
});
