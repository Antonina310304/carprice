import { style, styleVariants } from '@vanilla-extract/css';

import { mediaQueryDesktop, mediaQueryTablet } from '@constants/mediaQuery';

import { globalThemeColorVars } from '@styles/globalTheme';
import Theme from '@styles/theme';

export const wrapper = style({
  '@media': {
    [mediaQueryTablet]: {
      padding: '12px 0',
      position: 'absolute',
      width: ' max-content',
      border: `1px solid ${globalThemeColorVars.borderPrimary}`,
      background: globalThemeColorVars.backgroundPrimary,
      borderRadius: '8px',
    },
  },
});

export const wrapperToggle = styleVariants({
  open: {
    position: 'relative',
    visibility: 'visible',
    opacity: 1,

    '@media': {
      [mediaQueryDesktop]: {
        transition: `opacity ${Theme.durations.m250} ease-in-out`,

        ':before': {
          content: '',
          position: 'absolute',
          width: 0,
          height: 0,
          left: '25px',
          top: '-10px',
          borderBottom: '10px solid #D9DDE2',
          borderLeft: '15px solid transparent',
          borderRight: '15px solid transparent',
        },

        ':after': {
          content: '',
          position: 'absolute',
          width: 0,
          height: 0,
          left: '25px',
          top: '-9px',
          borderBottom: `10px solid ${globalThemeColorVars.backgroundPrimary}`,
          borderLeft: '15px solid transparent',
          borderRight: '15px solid transparent',
        },
      },
    },
  },
  close: {
    position: 'absolute',
    opacity: 0,
    visibility: 'hidden',
  },
});
