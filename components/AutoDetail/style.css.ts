import { style } from '@vanilla-extract/css';

import { fontSizeMap } from '@primitives/Typography/css/fontSizeMap';

import { spacing } from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  width: '100%',
});

export const head = style({});

export const main = style({
  marginTop: spacing(2),
  paddingTop: spacing(2),
  borderTop: ` 1px solid ${globalThemeColorVars.borderPrimary}`,
});

export const item = style({
  margin: 0,
  paddingBottom: spacing(1),
  alignItems: 'center',
});

export const listItem = style({
  ...fontSizeMap['14/20'],
  color: globalThemeColorVars.fontsQuaternary,
});

export const value = style({
  width: '50%',
  display: 'inline-block',
});

export const edit = style({
  cursor: 'pointer',
  display: 'inline-block',
  verticalAlign: 'sub',
});
