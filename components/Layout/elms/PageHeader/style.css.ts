import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop, mediaQueryMobile, mediaQueryTablet } from '@constants/mediaQuery';

import { mainContainer } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

export const headerWrapper = style([
  mainContainer,
  {
    '@media': {
      'screen and (max-width: 1023px)': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
]);

export const header = style({
  position: 'relative',
  zIndex: '3',
});

export const tabletWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
  marginRight: 'auto',
  padding: '15px 17px 15px 17px',
  borderBottom: `1px solid ${globalThemeColorVars.borderPrimary}`,

  '@media': {
    [mediaQueryMobile]: {
      paddingRight: '20px',
      paddingLeft: '21px',
    },
    [mediaQueryTablet]: {
      padding: '16px 21px 16px 16px',
    },
    [mediaQueryDesktop]: {
      width: 'auto',
      padding: '19px 0 19px 0',
    },
  },
});

export const burgerWrapper = style({
  marginRight: '27px',
  '@media': {
    [mediaQueryTablet]: {
      marginRight: '35px',
    },
  },
});

export const burger = style({
  margin: '-15px -15px -15px -8px',
  '@media': {
    [mediaQueryMobile]: {
      marginLeft: '-9px',
    },
    [mediaQueryTablet]: {
      margin: '-5px -15px -4px -5px',
    },
  },
});

export const logoWrapper = style({
  marginRight: 'auto',
  width: '158px',
  overflow: 'hidden',
  lineHeight: '0',

  '@media': {
    [mediaQueryTablet]: {
      marginBottom: '2px',
      marginRight: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    [mediaQueryDesktop]: {
      width: 'auto',
      marginRight: '63px',
    },
  },
});

export const telWrapper = style({
  padding: '21px 12px 20px',
});

export const siteNavWrapper = style({
  margin: '0 12px',
  paddingBottom: '10px',
  borderBottom: `1px solid ${globalThemeColorVars.borderPrimary}`,
  '@media': {
    [mediaQueryTablet]: {
      borderBottom: '0',
    },
  },
});

export const regionMobileWrapper = style({
  padding: '11px 12px',
  background: globalThemeColorVars.backgroundSecondary,
});

export const regionWrapper = style({
  marginRight: '15px',
  '@media': {
    [mediaQueryDesktop]: {
      marginRight: '32px',
    },
  },
});
