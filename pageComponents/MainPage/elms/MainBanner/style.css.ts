import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop, mediaQueryMobile } from '@constants/mediaQuery';

import padding from '@utils/padding';
import spacing from '@utils/spacing';

import { mainContainer } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

export const banner = style({
  position: 'absolute',
  width: '100%',
  height: '256px',
  backgroundImage: 'url(/static/images/main-banner.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  left: 0,

  ':before': {
    zIndex: 1,
    content: '',
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'absolute',
    background: 'linear-gradient(358.8deg, rgba(30, 31, 33, 0.8) 22.86%, rgba(30, 31, 33, 0) 99.39%);',
  },

  '@media': {
    [mediaQueryDesktop]: {
      height: '544px',
    },
  },
});

export const wrapper = style({
  position: 'relative',

  background: globalThemeColorVars.backgroundSecondary,
  '@media': {
    [mediaQueryDesktop]: {
      height: '544px',
    },
  },
});

export const headerColor = style({
  color: globalThemeColorVars.white,
});

export const titleInner = style({
  position: 'relative',
  ...padding(9, 2, 10),
  zIndex: 2,
});

export const TitleBlock = style({
  margin: '0 -12px',
  position: 'relative',
  minHeight: '256px',

  ':before': {
    top: 0,
    zIndex: 1,
    content: '',
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'absolute',
    background: 'linear-gradient(358.8deg, rgba(30, 31, 33, 0.8) 22.86%, rgba(30, 31, 33, 0) 99.39%);',
  },
  ':after': {
    top: 0,
    zIndex: 0,
    content: '',
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'absolute',
    backgroundImage: 'url(/static/images/main-banner.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
  },

  '@media': {
    [mediaQueryMobile]: {
      margin: '0 -15px',
    },
    [mediaQueryDesktop]: {
      paddingRight: '420px',
      ':before': {
        content: 'none',
      },
      ':after': {
        content: 'none',
      },
    },
  },
});

export const offerFormWrapper = style({
  position: 'relative',
  zIndex: 2,
  width: '100%',
  maxWidth: '416px',
  boxSizing: 'border-box',
  margin: '-48px auto 0',
  filter: 'drop-shadow(4px 6px 16px rgba(0, 0, 0, 0.12)) drop-shadow(2px 4px 40px rgba(0, 0, 0, 0.08))',

  '@media': {
    [mediaQueryDesktop]: {
      margin: 0,
      marginLeft: spacing(3),
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: '64px',
    },
  },
});

export const inner = style([
  mainContainer,
  {
    position: 'relative',
    zIndex: 2,
    '@media': {
      [mediaQueryDesktop]: {
        minHeight: '544px',
        paddingTop: spacing(12),
        display: 'flex',
      },
    },
  },
]);
