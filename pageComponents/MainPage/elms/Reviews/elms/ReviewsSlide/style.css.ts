import { style } from '@vanilla-extract/css';

import { spacing } from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme/index.css';

export const review = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const rating = style({
  padding: spacing(0, 0, 2),
});

export const auto = style({
  color: globalThemeColorVars.fontsSecondary,
});

export const wrapper = style({
  marginTop: 'auto',
  padding: spacing(0, 0, 1),
});
