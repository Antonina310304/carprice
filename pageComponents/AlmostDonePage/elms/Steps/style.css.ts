import { globalStyle, style } from '@vanilla-extract/css';

import { fontSizeMap } from '@primitives/Typography/css/fontSizeMap';
import { typographyVariants } from '@primitives/Typography/css/index.css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { spacing } from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const step = style({
  width: '100%',
  marginBottom: spacing(2),
});

export const content = style({
  margin: 0,
  padding: 0,
});

export const title = style({
  width: '100%',
});

export const label = style([
  typographyVariants.main,
  {
    justifyContent: 'flex-start',
    padding: '12px 16px',
    background: globalThemeColorVars.backgroundSecondaryLight,
    borderRadius: '4px',
  },
]);
export const success = style({
  background: globalThemeColorVars.backgroundTertiary,
  cursor: 'pointer',
});

export const wait = style({
  background: globalThemeColorVars.backgroundSecondary,
});

export const stepIcon = style({
  width: '32px',
  height: '32px',
});

export const stepper = style({
  position: 'relative',
});
