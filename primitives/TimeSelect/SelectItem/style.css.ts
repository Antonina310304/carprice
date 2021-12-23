import { style } from '@vanilla-extract/css';
import { spacing } from '@utils/spacing';
import { globalThemeColorVars } from '@styles/globalTheme';

export const iconStatus = style({
  display: 'inline-block',
  margin: spacing(0, 1),
  width: 8,
  height: 8,
  background: globalThemeColorVars.green,
  borderRadius: '50%',
});

export const iconMedium = style({
  color: globalThemeColorVars.yellow,
});

export const iconHigh = style({
  color: globalThemeColorVars.red,
});
