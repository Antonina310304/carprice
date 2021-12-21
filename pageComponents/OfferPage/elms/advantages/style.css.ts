import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { padding } from '@utils/padding';

import { globalBorderRadius, globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  background: globalThemeColorVars.backgroundSecondary,
  borderRadius: globalBorderRadius.base,
  boxSizing: 'border-box',
  ...padding(2),

  '@media': {
    [mediaQueryDesktop]: {
      ...padding(4),
    },
  },
});
