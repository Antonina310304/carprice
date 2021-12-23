import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import spacing from '@utils/spacing';

export const accordionTitle = style({
  fontWeight: 500,
  overflowWrap: 'anywhere',
});

export const flex = style({
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  margin: spacing(-1, 0),
});

export const column = style({
  flex: '1 0 auto',
  margin: spacing(1, 0),
});

export const title = style({
  marginBottom: spacing(1),

  '@media': {
    [mediaQueryDesktop]: {
      marginBottom: spacing(2),
    },
  },
});
