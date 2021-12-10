import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop, mediaQueryMobile } from '@constants/mediaQuery';

import { spacing } from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const basePageWrapper = style({
  paddingTop: spacing(6),

  '@media': {
    [mediaQueryDesktop]: {
      paddingTop: spacing(10),
    },
  },
});

export const mainContainer = style({
  maxWidth: '1032px',
  paddingLeft: '12px',
  paddingRight: '12px',
  width: '100%',
  margin: '0 auto',
  boxSizing: 'border-box',
  '@media': {
    [mediaQueryMobile]: {
      paddingLeft: '15px',
      paddingRight: '15px',
    },
    [mediaQueryDesktop]: {
      paddingLeft: '66px',
      paddingRight: '66px',
      maxWidth: '1162px',
    },
  },
});

export const baseListStyle = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  boxSizing: 'border-box',
});

export const textUppercase = style({
  textTransform: 'uppercase',
});

export const link = style({
  color: globalThemeColorVars.linkPrimary,
  textDecoration: 'none',
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
});

// TODO стили со старого сайта пришли
//  при верстке шапки и подвала,подумать как оптимизировать
export const baseSpacing = style({
  paddingLeft: '12px',
  paddingRight: '12px',
  '@media': {
    [mediaQueryMobile]: {
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
});

export const textMedium = style({
  fontWeight: '500',
});
