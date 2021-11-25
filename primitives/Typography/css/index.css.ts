import { StyleRule, styleVariants } from '@vanilla-extract/css';

import { fontSizeMap } from '@primitives/Typography/css/fontSizeMap';
import { TypographyTypes } from '@primitives/Typography/types';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { globalThemeColorVars } from '@styles/globalTheme';

export const typographyVariants = styleVariants<Record<TypographyTypes, StyleRule>>({
  info: {
    ...fontSizeMap['14/20'],
    fontWeight: 400,
  },
  base: {
    ...fontSizeMap['16/24'],
    fontWeight: 400,
  },
  title: {
    ...fontSizeMap['24/30'],
    fontWeight: 700,
    margin: '0 0 16px',
    color: globalThemeColorVars.fontsPrimary,
    '@media': {
      [mediaQueryDesktop]: {
        margin: '0 0 24px',
        ...fontSizeMap['54/63'],
      },
    },
  },
  subTitle: {
    //подзаголовки
    ...fontSizeMap['16/24'],
    margin: '0',
    fontWeight: 700,
    '@media': {
      [mediaQueryDesktop]: {
        ...fontSizeMap['20/30'],
      },
    },
  },
});

export const typographyAlignVariants = styleVariants<Record<'left' | 'center' | 'right', StyleRule>>({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
});
