import { style, styleVariants } from '@vanilla-extract/css';

import { mediaQueryDesktop, mediaQueryTablet } from '@constants/mediaQuery';

import { mainContainer } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

export const headerWrapper = style([
  mainContainer,
  {
    '@media': {
      [mediaQueryDesktop]: {
        padding: '0 64px 0 66px',
      },
    },
  },
]);

export const tabletWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  boxSizing: 'border-box',
  marginRight: 'auto',
  padding: '15px 21px 15px 21px',
  borderBottom: `1px solid ${globalThemeColorVars.borderPrimary}`,

  '@media': {
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
  marginRight: '25px',
  '@media': {
    [mediaQueryTablet]: {
      marginRight: '27px',
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

export const menuWrapper = style({
  position: 'fixed',
  top: '55px',
  bottom: 0,
  zIndex: 5,
  background: globalThemeColorVars.backgroundPrimary,
  width: '100%',
  transition: 'transform 0.3s ease-in',
});

export const variant = styleVariants({
  open: { transform: 'translateX(0)' },
  close: { transform: 'translateX(-100%)' },
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
