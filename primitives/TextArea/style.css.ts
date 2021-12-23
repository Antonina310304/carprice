import { globalStyle, style } from '@vanilla-extract/css';

import { stepper } from '@components/WithStepperVertical/style.css';

import fontSizeMap from '@primitives/Typography/css/fontSizeMap';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import padding from '@utils/padding';
import spacing from '@utils/spacing';

import { globalBorderRadius, globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  ...padding(2),
  marginTop: spacing(2),
  width: '100%',

  '@media': {
    [mediaQueryDesktop]: {
      ...padding(3),
    },
  },
});

export const textareaWrap = style({});

export const textarea = style({
  width: 'calc(100% - 34px)',
  resize: 'none',
  // minHeight: '48px',
  outline: 'none',
  // maxHeight: '48px',
  borderRadius: globalBorderRadius.base,
  ...padding(1),
  ...fontSizeMap['12/18'],
  borderColor: globalThemeColorVars.borderPrimary,

  '@media': {
    [mediaQueryDesktop]: {
      ...fontSizeMap['16/24'],
      ...padding(2),
    },
  },
  selectors: {
    '&::-webkit-input-placeholder': {
      color: globalThemeColorVars.fontsQuaternary,
    },
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: globalThemeColorVars.fontsQuaternary,
      borderRadius: '32px',
      cursor: 'pointer',
      width: '4px',
      minHeight: '52px',
      minWidth: '52px',
      boxShadow: 'inset 0 0 0 2px #f4f6fa',
    },
    '&::-webkit-scrollbar-track': {
      background: '#F4F6FA',
    },
  },
});
