import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop, mediaQueryDesktopM, mediaQueryMobileM } from '@constants/mediaQuery';

import { globalThemeColorVars } from '@styles/globalTheme';

export const footer = style({
  width: '100%',
  padding: '80px 0',
  boxSizing: 'border-box',
  background: globalThemeColorVars.backgroundQuaternary,
  '@media': {
    [mediaQueryDesktop]: {
      padding: '72px 0px',
    },
    [mediaQueryDesktopM]: {
      padding: '4% 0 21px',
    },
  },
});

export const footerBottom = style({
  paddingTop: '32px',
  marginBottom: '40px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  borderTop: `1px solid ${globalThemeColorVars.borderPrimary}`,

  '@media': {
    [mediaQueryDesktop]: {
      flexWrap: 'nowrap',
      marginBottom: '32px',
      gap: '80px',
    },
  },
});

export const footerTop = style({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '-9px',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '32px',

  '@media': {
    [mediaQueryMobileM]: {
      paddingBottom: '64px',
    },
  },
});

export const footerTopItem = style({
  margin: '9px',
});

export const footerLogo = style([
  footerTopItem,
  {
    marginRight: 'auto',
  },
]);

export const regionWrapper = style({
  marginRight: '34px',
});

export const copyRight = style({
  color: globalThemeColorVars.fontsTertiary,
  margin: 0,
});
