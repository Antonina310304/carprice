import { style } from '@vanilla-extract/css';

import { baseListStyle } from '@styles/baseStyle/baseStyle.css';
import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const list = style([
  baseListStyle,
  {
    flex: '0 0 auto',
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap',
  },
]);

export const icon = style({
  transition: `fill ${globalThemeDurationVars.m250} ease-in-out`,
  ':hover': {
    fill: globalThemeColorVars.fillPrimary,
    transition: `fill ${globalThemeDurationVars.m250} ease-in-out`,
  },
});
