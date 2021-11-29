import { style } from '@vanilla-extract/css';

import { globalThemeColorVars } from '@styles/globalTheme';

export const dots = style({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  gap: '8px',
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
