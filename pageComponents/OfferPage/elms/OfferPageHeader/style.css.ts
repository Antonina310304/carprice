import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import padding from '@utils/padding';
import spacing from '@utils/spacing';

import { mainContainer } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  ...padding(6, 0, 7),
  background: globalThemeColorVars.backgroundSecondaryLight,

  '@media': {
    [mediaQueryDesktop]: {
      ...padding(4, 0, 15),
    },
  },
});

export const flex = style({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
});

export const titleBlock = style({
  flex: 1,
});

export const offerWrapper = style([
  mainContainer,
  {
    marginTop: spacing(-5),

    '@media': {
      [mediaQueryDesktop]: {
        marginTop: spacing(-12),
      },
    },
  },
]);

export const imageWrapper = style({
  margin: '0 auto',
});
