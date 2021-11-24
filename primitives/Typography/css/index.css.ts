import { StyleRule, styleVariants } from '@vanilla-extract/css';

import { fontSizeMap } from '@primitives/Typography/css/fontSizeMap';

import { mediaQueryDesktop } from '@constants/mediaQuery';

export const typographyVariants = styleVariants<Record<any, any>>({
  info: {
    ...fontSizeMap['14/20'],
    fontWeight: 400,
  },
  base: {
    ...fontSizeMap['16/24'],
    fontWeight: 400,
  },

  pageTitle: {
    ...fontSizeMap['24/26'],
    fontWeight: 700,
    '@media': {
      [mediaQueryDesktop]: {
        ...fontSizeMap['54/63'],
      },
    },
  },
  subTitle: {
    //подзаголовки
    ...fontSizeMap['16/24'],
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
