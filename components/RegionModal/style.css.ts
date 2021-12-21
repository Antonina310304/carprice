import { style } from '@vanilla-extract/css';

import { globalThemeColorVars } from '@styles/globalTheme';

export const modal = style({
  position: 'relative',
});

export const listWrapper = style({
  width: '100%',
  maxHeight: '100%',
  overflowY: 'auto',
});

export const locationIcon = style({
  display: 'inline-block',
  width: '14px',
  height: '18px',
  marginRight: '13px',
});

export const header = style({
  paddingBottom: '10px',
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  margin: '-5px',
});

export const titleCity = style({
  display: 'inline-block',
  margin: '5px',
  color: globalThemeColorVars.fontsSecondary,
});

export const regionWrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  margin: '5px',
});

export const selectedRegion = style({
  display: 'inline-block',
});
