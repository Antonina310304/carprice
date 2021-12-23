import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop, mediaQueryTablet } from '@constants/mediaQuery';

import spacing from '@utils/spacing';

import { basePageWrapper, mainContainer } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

export const pageWrapper = style({
  paddingBottom: spacing(4),

  '@media': {
    [mediaQueryDesktop]: {
      paddingBottom: spacing(7),
    },
  },
});

export const page = style([
  basePageWrapper,
  {
    '@media': {
      [mediaQueryDesktop]: {
        paddingBottom: spacing(10),
        display: 'flex',
        gap: spacing(0, 3),
      },
    },
  },
]);

export const mainContent = style({
  width: '100%',
  marginBottom: spacing(4),
  '@media': {
    [mediaQueryDesktop]: {
      maxWidth: '592px',
      marginBottom: 0,
    },
  },
});

export const aside = style({
  flex: '1 1 auto',
  marginBottom: spacing(4),
});

export const buttonWrapper = style({
  marginTop: spacing(2),
  '@media': {
    [mediaQueryDesktop]: {
      marginTop: spacing(3),
      marginBottom: 0,
    },
  },
});

export const headerFirstStepWrapper = style({
  marginBottom: spacing(8),
  '@media': {
    [mediaQueryDesktop]: {
      marginBottom: spacing(26),
    },
  },
});

export const button = style({
  display: 'inline-block',
  width: '100%',
  padding: spacing(1, 5),
  maxWidth: '360px',
  margin: '0 auto',

  '@media': {
    [mediaQueryTablet]: {
      margin: '0',
      width: 'auto',
    },
  },
});

export const pageFooter = style({
  borderTop: `1px solid ${globalThemeColorVars.borderPrimary}`,
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing(2),
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: spacing(2),

  '@media': {
    [mediaQueryTablet]: {
      justifyContent: 'space-between',
    },

    [mediaQueryDesktop]: {
      paddingTop: spacing(3),
    },
  },
});
