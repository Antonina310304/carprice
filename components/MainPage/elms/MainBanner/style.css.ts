import { style } from '@vanilla-extract/css';

import { padding } from '@utils/padding';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { mainContainer } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  position: 'relative',
  width: '100%',
  height: '256px',
  backgroundImage: 'url(/static/images/main-banner.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: '50%',

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

export const headerColor = style({
  color: globalThemeColorVars.white,
});

export const TitleBlock = style({
  ...padding(9, 0, 10),
});

export const inner = style([
  mainContainer,
  {
    position: 'relative',
    zIndex: 2,
  },
]);
