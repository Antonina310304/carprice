import { makeStyles } from '@material-ui/core/styles';
import { style } from '@vanilla-extract/css';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const wrapper = style({
  selectors: {
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#D9DDE2',
      borderRadius: '32px',
      cursor: 'pointer',
      width: '4px',
      minHeight: '52px',
      minWidth: '52px',
      boxShadow: 'inset 0 0 0 2px #f4f6fa',
    },
    '&::-webkit-scrollbar-track': {
      background: '#F4F6FA',
    },
  },
});

export const icon = style({
  right: '16px',
  position: 'absolute',
  transition: `transform ${globalThemeDurationVars.m150} ease-in`,
});

export const successIcon = style({
  zIndex: 150,
  position: 'absolute',
  right: '15px',
});

export const disabledIcon = style({
  fill: globalThemeColorVars.fontsGray,
});

export const progressIcon = style({
  zIndex: 150,
  position: 'absolute',
  right: '40px',
  color: globalThemeColorVars.fontsBaseGreen,
});

export const successProgressIcon = style({
  color: globalThemeColorVars.fontsGray,
});

export const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: globalThemeColorVars.borderLight,
    },
  },
});
