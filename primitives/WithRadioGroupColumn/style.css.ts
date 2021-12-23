import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import padding from '@utils/padding';
import spacing from '@utils/spacing';

import { globalBorderRadius, globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  width: '100%',
});

export const componentWrapper = style({
  marginTop: spacing(2),
  marginBottom: spacing(1),

  '@media': {
    [mediaQueryDesktop]: {
      marginBottom: spacing(5),
    },
  },
});

export const radio = style({
  margin: 0,
  paddingTop: 0,
  paddingBottom: 0,
  marginLeft: '-9px',
});

export const formControlStyle = style({
  width: '100%',
  margin: 0,
  display: 'flex',
  boxSizing: 'border-box',
  borderRadius: globalBorderRadius.base,
  background: globalThemeColorVars.backgroundSecondary,
  ...padding(1, 2),
  marginBottom: spacing(1),
});

export const paddingMax = style({
  ...padding(2, 2),
});
