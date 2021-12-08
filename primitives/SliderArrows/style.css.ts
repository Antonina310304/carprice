import { style } from '@vanilla-extract/css';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const wrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
});
export const navButton = style({
  padding: 0,
  margin: 0,
  background: globalThemeColorVars.transparent,
  border: 'none',
});

export const icon = style({
  transition: `fill ${globalThemeDurationVars.m250} ease-in-out`,
  cursor: 'pointer',
  ':hover': {
    fill: globalThemeColorVars.fillPrimary,
    transition: `fill ${globalThemeDurationVars.m250} ease-in-out`,
  },

  selectors: {
    [`${navButton}[disabled] &:hover`]: {
      fill: globalThemeColorVars.fontsGray,
    },
  },
});
