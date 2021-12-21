import { style } from '@vanilla-extract/css';

import { spacing } from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  borderRadius: 0,
  borderBottom: `1px solid ${globalThemeColorVars.borderPrimary}`,

  selectors: {
    '&:last-of-type': {
      borderBottom: 0,
    },
  },
});

export const label = style({
  paddingLeft: 0,
  margin: 0,
});

export const accordionDetails = style({
  // marginTop: spacing(-1),
  marginBottom: spacing(-1),
});
