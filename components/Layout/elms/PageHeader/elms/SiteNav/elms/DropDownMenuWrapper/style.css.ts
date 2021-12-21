import { style, styleVariants } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const wrapper = style({
  '@media': {
    [mediaQueryDesktop]: {
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
        transition: `opacity ${globalThemeDurationVars.m250} ease-in-out`,

        ':before': {
          content: '',
          position: 'absolute',
          width: 0,
          height: 0,
          left: '25px',
          top: '-10px',
          borderBottom: `10px solid  ${globalThemeColorVars.borderPrimary}`,
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
