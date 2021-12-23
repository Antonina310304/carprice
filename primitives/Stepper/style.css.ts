import { globalStyle, style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import padding from '@utils/padding';
import spacing from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const accordionWrapper = style({
  boxShadow: 'none',
  border: 'none',
  paddingLeft: spacing(4),
  margin: '0  !important',
  paddingBottom: spacing(4),

  ':before': {
    display: 'block !important',
    opacity: '1  !important',
    position: 'absolute',
    content: '',
    top: 0,
    left: '7px',
    height: '100%',
    width: '2px',
    backgroundColor: globalThemeColorVars.borderPrimary,
  },

  selectors: {
    '&:last-of-type:before': {
      content: 'none',
    },
  },

  ':after': {
    position: 'absolute',
    content: '',
    zIndex: 2,
    top: 0,
    left: 0,
    borderRadius: '50%',
  },

  ':last-of-type': {
    paddingBottom: spacing(0),
  },

  '@media': {
    [mediaQueryDesktop]: {
      paddingLeft: '40px',
      ':before': {
        left: '11px',
      },
    },
  },
});

export const accordionHeader = style({
  margin: 0,
  minHeight: 0,
  ...padding(0),
});

globalStyle(`${accordionHeader} .MuiAccordionSummary-content`, {
  margin: 0,
});

globalStyle(`${accordionHeader}.Mui-expanded`, {
  minHeight: 0,
});

export const accordionInner = style({
  paddingTop: spacing(2),
  borderTop: `1px solid ${globalThemeColorVars.borderPrimary}`,
});

export const accordionDetails = style({
  ...padding(0),
});

export const stepPrev = style({
  ':after': {
    width: '16px',
    height: '16px',
    backgroundColor: globalThemeColorVars.fontsBaseGreen,
    boxSizing: 'border-box',
    backgroundImage: 'url(/static/icons/check.svg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '8px auto',
  },

  '@media': {
    [mediaQueryDesktop]: {
      ':after': {
        width: '24px',
        height: '24px',
        backgroundSize: '12px auto',
      },
    },
  },
});

export const stepCurrent = style({
  ':after': {
    height: '16px',
    width: '16px',
    boxSizing: 'border-box',
    backgroundColor: globalThemeColorVars.fontsBaseGreen,
    border: `2px solid ${globalThemeColorVars.borderPrimary}`,
  },
  '@media': {
    [mediaQueryDesktop]: {
      ':after': {
        width: '23px',
        height: '24px',
      },
    },
  },
});

export const stepNext = style({
  opacity: 0.4,
  ':after': {
    left: '2px',
    backgroundColor: globalThemeColorVars.white,
    height: '12px',
    width: '12px',
    boxSizing: 'border-box',
    border: `2px solid ${globalThemeColorVars.borderPrimary}`,
  },

  '@media': {
    [mediaQueryDesktop]: {
      ':after': {
        left: '4px',
        height: '16px',
        width: '16px',
      },
    },
  },
});

export const title = style({
  fontWeight: 500,
  marginBottom: spacing(1),
});

export const subtitle = style({
  color: globalThemeColorVars.fontsQuaternary,
  marginBottom: spacing(1),
});
