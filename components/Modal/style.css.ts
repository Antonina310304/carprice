import { style } from '@vanilla-extract/css';

import { globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  display: 'flex',
  background: globalThemeColorVars.backgroundPrimary,
});
