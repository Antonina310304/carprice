import { style } from '@vanilla-extract/css';

import { spacing } from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const header = style({
  color: globalThemeColorVars.fontsQuaternary,
  margin: spacing(0, 0, 3),
});
