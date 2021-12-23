import { style } from '@vanilla-extract/css';

import spacing from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

// eslint-disable-next-line import/prefer-default-export
export const header = style({
  color: globalThemeColorVars.fontsQuaternary,
  margin: spacing(0, 0, 3),
});
