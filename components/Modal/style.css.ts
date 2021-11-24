import { style } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { globalThemeColorVars } from '@styles/globalTheme';

export const mainWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px 30px',
  overflowY: 'auto',
  boxSizing: 'border-box',
});

export const modalContent = style({
  borderRadius: '4px',
  margin: '30px auto',
  display: 'flex',
  padding: '30px',
  background: globalThemeColorVars.backgroundPrimary,
  maxWidth: '680px',
  maxHeight: '400px',
  overflowY: 'auto',
  boxSizing: 'border-box',
  width: '100%',
  border: `1px solid ${globalThemeColorVars.borderPrimary}`,
  boxShadow: `0 5px 15px ${globalThemeColorVars.shadowModalPrimary}`,
  outline: 'none',
  '@media': {
    [mediaQueryDesktop]: {
      maxHeight: 'none',
    },
  },
});
