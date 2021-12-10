import { style } from '@vanilla-extract/css';
import cn from 'classnames';

import { typographyVariants } from '@primitives/Typography/css/index.css';

import { mediaQueryDesktop, mediaQueryTablet } from '@constants/mediaQuery';

import { padding } from '@utils/padding';
import { spacing } from '@utils/spacing';

import { basePageWrapper, mainContainer } from '@styles/baseStyle';
import { globalBorderRadius, globalThemeColorVars } from '@styles/globalTheme';

export const page = style([
  mainContainer,
  basePageWrapper,
  {
    '@media': {
      [mediaQueryDesktop]: {
        display: 'flex',
      },
    },
  },
]);

export const sectionWrapper = style({
  marginBottom: spacing(2),

  '@media': {
    [mediaQueryDesktop]: {
      marginBottom: spacing(3),
    },
  },
});

export const pageHeader = style([
  sectionWrapper,
  {
    borderBottom: `1px solid ${globalThemeColorVars.borderPrimary}`,
    marginBottom: spacing(2),

    '@media': {
      [mediaQueryDesktop]: {
        display: 'flex',
        alignItems: 'flex-end',
      },
    },
  },
]);

export const image = style({
  '@media': {
    [mediaQueryDesktop]: {
      flex: '0 0 auto',
    },
  },
});

export const mainContent = style({
  width: '680px',
  flex: '0 0 auto',
});

export const titleBlock = style({
  paddingBottom: spacing(3),
});

export const subtitle = style({
  color: globalThemeColorVars.fontsPrimary,
  marginBottom: spacing(2),
});

export const text = style({
  color: globalThemeColorVars.fontsQuaternary,
  marginBottom: spacing(3),
});

export const carDetailWrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: spacing(2, 0),

  '@media': {
    [mediaQueryTablet]: {
      gridTemplateColumns: '1fr 1fr',
      gridGap: spacing(2, 3),
    },
  },
});

export const carDetailInner = style({
  width: 'auto',
});

export const aside = style({
  alignSelf: 'flex-start',
  marginLeft: spacing(3),
});

export const carDetail = style([
  typographyVariants.main,
  {
    ...padding(2),
    margin: 0,
    border: `1px solid ${globalThemeColorVars.green}`,
    borderRadius: globalBorderRadius.base,
  },
]);
