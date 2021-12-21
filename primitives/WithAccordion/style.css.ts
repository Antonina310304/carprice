import { globalStyle, style } from '@vanilla-extract/css';

import { padding } from '@utils/padding';
import { spacing } from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  background: globalThemeColorVars.backgroundSecondary,
  boxShadow: 'none',
});

export const accordionHeader = style({
  margin: 0,
  minHeight: 0,
  ...padding(2),
});

globalStyle(`${accordionHeader} .MuiAccordionSummary-content`, {
  margin: 0,
});

globalStyle(`${accordionHeader}.Mui-expanded`, {
  minHeight: 0,
});

export const accordionInner = style({
  paddingTop: spacing(2),
  borderTop: `1px solid ${globalThemeColorVars.borderPrimary}`,
});

export const accordionDetails = style({
  ...padding(0, 2, 2),
});
