import { style } from '@vanilla-extract/css';

import { auto } from '@pages/MainPage/elms/Reviews/elms/ReviewsSlide/style.css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import padding from '@utils/padding';
import spacing from '@utils/spacing';

import { flex, textMedium } from '@styles/baseStyle';
import { globalBorderRadius, globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  ...padding(2),
  textAlign: 'center',
  boxShadow: '4px 6px 16px rgba(0, 0, 0, 0.12), 2px 4px 40px rgba(0, 0, 0, 0.08)',
  borderRadius: globalBorderRadius.medium,
  background: globalThemeColorVars.white,

  '@media': {
    [mediaQueryDesktop]: {
      ...padding(4),
      display: 'flex',
      gap: spacing(0, 3),
      textAlign: 'left',
    },
  },
});
export const price = style({
  fontSize: 32,
  lineHeight: '37px',
  fontWeight: 700,
  margin: spacing(0, 0, 1),

  '@media': {
    [mediaQueryDesktop]: {
      fontSize: 54,
      lineHeight: '63px',
      marginBottom: 'auto',
    },
  },
});

export const button = style({
  marginTop: spacing(2),
  width: '297px',
  maxWidth: '100%',
  '@media': {
    [mediaQueryDesktop]: {
      marginTop: 'auto',
    },
  },
});

export const textWrapper = style({
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing(0, 1),
  alignSelf: 'flex-start',
  paddingLeft: spacing(3),
  borderLeft: `1px solid ${globalThemeColorVars.borderPrimary}`,
});

export const text = style([
  textMedium,
  {
    width: '100%',
    marginBottom: spacing(1),

    ':last-of-type': {
      marginBottom: 0,
    },
  },
]);

export const mainOfferBlock = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [mediaQueryDesktop]: {
      maxWidth: '328px',
    },
  },

});

export const blockWrapper = style([
  flex,
  {
    flex: 1,
    justifyContent: 'center',

    '@media': {
      [mediaQueryDesktop]: {
        justifyContent: 'flex-start',
      },
    },

  },
]);
