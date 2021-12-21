import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { spacing } from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export const itemStyle = style({
  paddingLeft: '20px',
  position: 'relative',
  color: globalThemeColorVars.fontsQuaternary,
  marginBottom: spacing(1),

  ':before': {
    position: 'absolute',
    content: '',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: globalThemeColorVars.fontsBaseGreen,
    left: 0,
    top: '7px',
  },

  ':last-child': {
    marginBottom: 0,
  },

  '@media': {
    [mediaQueryDesktop]: {
      marginBottom: spacing(2),
    },
  },
});
