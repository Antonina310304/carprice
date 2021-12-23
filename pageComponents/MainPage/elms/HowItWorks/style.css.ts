import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import padding from '@utils/padding';
import spacing from '@utils/spacing';

import { baseListStyle } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

export const imgWrapper = style({
  paddingLeft: spacing(4),
  paddingBottom: spacing(3),
});

export const titleBlock = style({
  paddingBottom: '15px',
  '@media': {
    [mediaQueryDesktop]: {
      paddingBottom: spacing(5),
    },
  },
});

export const stepsList = style([
  baseListStyle,
  {
    margin: '0 -12px',
    paddingBottom: spacing(5),
    counterReset: 'number',

    '@media': {
      [mediaQueryDesktop]: {
        display: 'flex',
      },
    },
  },
]);
export const stepsListItem = style({
  position: 'relative',
  ...padding(9, 2, 0, 2),
  boxSizing: 'border-box',
  textAlign: 'center',

  ':before': {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-95%)',
    counterIncrement: 'number',
    content: 'counter(number) ',
    color: globalThemeColorVars.fontsLightGreen,
    // fontFeatureSettings: "'tnum' on, 'lnum' on",
    fontWeight: 'bold',
    fontSize: '150px',
    lineHeight: '176px',
  },

  '@media': {
    [mediaQueryDesktop]: {
      textAlign: 'left',
      paddingTop: spacing(12),

      width: '33.333%',
      ':before': {
        top: 0,
        left: '12px',
        transform: 'none',
        fontSize: '200px',
        lineHeight: '234px',
      },
    },
  },
});
export const stepsListInner = style({});

export const item = style({});
