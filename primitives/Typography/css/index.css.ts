import { StyleRule, styleVariants } from '@vanilla-extract/css';

import { fontSizeMap } from '@primitives/Typography/css/fontSizeMap';
import { TypographyTypes } from '@primitives/Typography/types';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { globalThemeColorVars } from '@styles/globalTheme';

export const typographyVariants = styleVariants<Record<TypographyTypes, StyleRule>>({
  info: {
    ...fontSizeMap['14/20'],
    margin: 0,
    fontWeight: 400,
  },
  base: {
    ...fontSizeMap['16/24'],
    fontWeight: 400,
  },
  main: {
    ...fontSizeMap['14/20'],
    fontWeight: 400,
    margin: 0,
    '@media': {
      [mediaQueryDesktop]: {
        ...fontSizeMap['16/24'],
      },
    },
  },
  headLine: {
    ...fontSizeMap['16/24'],
    fontWeight: 500,
    margin: '0 0 8px',
    color: globalThemeColorVars.fontsPrimary,
    '@media': {
      [mediaQueryDesktop]: {
        ...fontSizeMap['18/26'],
      },
    },
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
  sectionTitle: {
    ...fontSizeMap['24/30'],
    margin: '0 0 16px',
    '@media': {
      [mediaQueryDesktop]: {
        ...fontSizeMap['36/54'],
      },
    },
  },
  sectionSubTitle: {
    ...fontSizeMap['16/24'],
    margin: '0',
    fontWeight: 500,
    color: globalThemeColorVars.fontsQuaternary,
    '@media': {
      [mediaQueryDesktop]: {
        ...fontSizeMap['20/30'],
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

export const typographyAlignVariants = styleVariants<Record<'left' | 'center' | 'right' | 'inherit', StyleRule>>({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  inherit: { textAlign: 'inherit' },
});
