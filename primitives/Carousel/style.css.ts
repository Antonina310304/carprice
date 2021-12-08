import { style } from '@vanilla-extract/css';

import { padding } from '@utils/padding';
import { spacing } from '@utils/spacing';

import { baseSpacing } from '@styles/baseStyle/baseStyle.css';
import { globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style([baseSpacing, {}]);

export const bulletsWrapper = style({
  margin: spacing(2, 0, 0),
  ...padding(0, 1),
  textAlign: 'center',
});

export const dotWrapper = style({
  padding: spacing(0, 3),
});

export const bullets = style({
  display: 'flex',
  justifyContent: 'center',
  gap: spacing(1),
});

export const slide = style({
  display: 'flex',
  height: 'auto',
});

export const bullet = style({
  width: spacing(1),
  height: spacing(1),
  borderRadius: '50%',

  boxSizing: 'border-box',
  border: `1px solid ${globalThemeColorVars.borderTertiary}`,
});

export const activeBullet = style({
  background: globalThemeColorVars.borderSecondary,
  borderColor: globalThemeColorVars.borderSecondary,
});
