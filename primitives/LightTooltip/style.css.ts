import { globalStyle, style } from '@vanilla-extract/css';

import { tooltipClasses } from '@mui/material';

import { padding } from '@utils/padding';

import { globalThemeColorVars } from '@styles/globalTheme';

export const wrapper = style({
  ...padding(0),
});

globalStyle(`${wrapper} .css-kudwh-MuiTooltip-arrow`, {
  color: globalThemeColorVars.white,
});

export const tooltipStyle = ({ theme }) => ({
  ['&']: {
    filter: 'drop-shadow(0px 20px 20px rgba(150, 152, 156, 0.12)) drop-shadow(20px 0px 20px rgba(150, 152, 156, 0.12))',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    ...padding(2),
    filter: 'drop-shadow(0px 0px 1px #EEF0F4)',
    fontWeight: 400,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: globalThemeColorVars.white,
    borderRadius: '1px',
  },
});
