import { style } from '@vanilla-extract/css';

import { padding } from '@utils/padding';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const switchWrapper = style({
  position: 'relative',
  display: 'flex',
  boxSizing: 'border-box',
  borderRadius: '32px',
  boxShadow: `inset 0 0 0 1px ${globalThemeColorVars.borderPrimary}`,
  background: globalThemeColorVars.backgroundGray,
});

export const thumb = style({
  position: 'absolute',
  zIndex: 1,
  background: globalThemeColorVars.green,
  cursor: 'default',
  borderRadius: '32px',
  width: '50%',
  height: '100%',
  left: 0,
  transition: 'left 250ms ease-in',
  boxShadow: '4px 6px 16px rgba(0, 0, 0, 0.12), 2px 4px 40px rgba(0, 0, 0, 0.08)',
});

export const switchItem = style({
  zIndex: 2,
  width: '50%',
  boxSizing: 'border-box',
  margin: 0,
  ...padding(2, 1),
  cursor: 'pointer',
  color: globalThemeColorVars.fontsQuaternary,

  textAlign: 'center',
  textTransform: 'uppercase',
  fontWeight: '700',
  transition: `color ${globalThemeDurationVars.m250} ease-in-out`,
});

export const switchItemActive = style({
  color: globalThemeColorVars.white,
  transition: `color ${globalThemeDurationVars.m250} ease-in-out`,
});
