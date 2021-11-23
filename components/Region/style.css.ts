import { style, styleVariants } from '@vanilla-extract/css';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';
import Theme from '@styles/theme';

export const wrapper = style({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '0 0 auto',
});

export const regionIcon = style({
  transition: `fill ${globalThemeDurationVars.m250} ease-in`,

  selectors: {
    [` ${wrapper}:hover &`]: {
      fill: globalThemeColorVars.fillPrimary,
      transition: `fill ${globalThemeDurationVars.m250} ease-in`,
    },
  },
});

export const selectedRegion = style({
  fontSize: '16px',
  lineHeight: '24px',
  margin: 0,
  color: globalThemeColorVars.fontsPrimary,
  transition: `color ${Theme.durations.m250} ease-in`,

  selectors: {
    [` ${wrapper}:hover &`]: {
      color: globalThemeColorVars.linkHoverSecondary,
      transition: `color ${Theme.durations.m250} ease-in`,
    },
  },
});

export const locationIcon = style({
  display: 'block',
  width: '14px',
  height: '18px',
  marginRight: '13px',
});

export const iconWrapper = style({
  marginLeft: '10px',
  display: 'block',
  transition: `transform ${Theme.durations.m250} ease-in`,
  transformOrigin: '50% 50%',
  width: '12px',
  height: '5px',
});

export const toggleIcon = styleVariants({
  open: {
    transform: 'rotate(180deg)',
  },
  close: {
    transform: 'rotate(0)',
  },
});
