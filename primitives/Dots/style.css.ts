import { style } from '@vanilla-extract/css';

import spacing from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const dots = style({
  display: 'inline-flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  gap: spacing(1),
});

export const dot = style({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  boxSizing: 'border-box',
  border: `1px solid ${globalThemeColorVars.borderTertiary}`,
});

export const activeDot = style({
  background: globalThemeColorVars.borderSecondary,
  borderColor: globalThemeColorVars.borderSecondary,
});
