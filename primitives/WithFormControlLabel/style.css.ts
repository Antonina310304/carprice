import { style } from '@vanilla-extract/css';

import { padding } from '@utils/padding';
import { spacing } from '@utils/spacing';

import { globalBorderRadius, globalThemeColorVars } from '@styles/globalTheme';

export const formControlStyle = style({
  width: '100%',
  margin: 0,
  display: 'flex',
  boxSizing: 'border-box',
  borderRadius: globalBorderRadius.base,
  background: globalThemeColorVars.backgroundSecondary,
  ...padding(1, 2),
  marginBottom: spacing(1),
});

export const radio = style({
  margin: 0,
  paddingTop: 0,
  paddingBottom: 0,
  marginLeft: '-9px',
});
