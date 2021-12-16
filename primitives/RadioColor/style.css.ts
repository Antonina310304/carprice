import { style } from '@vanilla-extract/css';

import { mediaQueryMobile } from '@constants/mediaQuery';

import { spacing } from '@utils/spacing';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const input = style({
  display: 'none',
});

export const colorList = style({
  display: 'flex',
  gap: '0 12px',
  overflowY: 'auto',
  margin: '0 -12px',
  padding: '0 12px',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',

  selectors: {
    ['&::-webkit-scrollbar']: {
      width: 0,
      height: 0,
    },
  },

  '@media': {
    [mediaQueryMobile]: {
      margin: '0 -15px',
      padding: '0 15px',
    },
  },
});

export const wrapper = style({
  maxWidth: '100%',
});

export const label = style({
  position: 'relative',
  cursor: 'pointer',
  height: '30px',
});

export const iconCheck = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 0,
  transition: `opacity ${globalThemeDurationVars.m250} ease-in-out`,
});

export const activeCheck = style({
  opacity: 1,
  transition: `opacity ${globalThemeDurationVars.m250} ease-in-out`,
});

export const checkedColor = style({
  color: globalThemeColorVars.fontsQuaternary,
  margin: spacing(1, 0, 0),
  minHeight: '24px',
});
