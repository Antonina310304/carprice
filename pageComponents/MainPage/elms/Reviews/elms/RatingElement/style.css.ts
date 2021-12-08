import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop, mediaQueryTablet } from '@constants/mediaQuery';

import { spacing } from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  paddingBottom: spacing(1),
});

export const starWrapper = style({
  paddingBottom: spacing(2),
  marginBottom: 'auto',
});

export const rating = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  boxSizing: 'border-box',

  '@media': {
    [mediaQueryTablet]: {
      width: 'auto',
      flex: 1,
    },

    [mediaQueryDesktop]: {
      selectors: {
        '&:nth-child(2)': {
          gridRow: '1',
          gridColumn: '2',
        },
        '&:nth-child(3)': {
          gridRow: '1',
          gridColumn: '3',
        },
        '&:nth-child(4)': {
          gridRow: '1',
          gridColumn: '4',
        },
      },
    },
  },
});

export const ratingCount = style([
  wrapper,
  {
    margin: 0,
    color: globalThemeColorVars.fontsBaseGreen,
    fontSize: '60px',
    lineHeight: '60px',
    //fontFeatureSettings: "'tnum' on, 'lnum' on",
    fontWeight: 700,

    '@media': {
      [mediaQueryDesktop]: {
        fontSize: '80px',
        lineHeight: '80px',
      },
    },
  },
]);

export const icon = style({
  display: 'inline-block',
  marginRight: spacing(1),
});
