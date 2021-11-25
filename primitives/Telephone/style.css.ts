import { style } from '@vanilla-extract/css';

import { globalThemeColorVars } from '@styles/globalTheme';
import { globalThemeDurationVars } from '@styles/globalTheme/index.css';

export const wrapper = style({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  color: globalThemeColorVars.fontsPrimary,
  transition: `color ${globalThemeDurationVars.m250} ease-in-out`,

  ':hover': {
    color: globalThemeColorVars.linkHoverSecondary,
    transition: `color ${globalThemeDurationVars.m250} ease-in-out`,
  },
});

export const iconWrapper = style({
  display: 'inline-block',
  marginRight: '4px',
});
