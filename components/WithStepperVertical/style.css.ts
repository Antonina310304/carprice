import { globalStyle, style } from '@vanilla-extract/css';

import { fontSizeMap } from '@primitives/Typography/css/fontSizeMap';
import { typographyVariants } from '@primitives/Typography/css/index.css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { spacing } from '@utils/spacing';

import { globalThemeColorVars } from '@styles/globalTheme';

export const step = style({
  width: '100%',
  marginBottom: spacing(2),
});

export const content = style({
  margin: 0,
  padding: 0,
});

export const title = style({
  width: '100%',
});

export const label = style([
  typographyVariants.main,
  {
    justifyContent: 'flex-start',
    padding: '12px 16px',
    background: globalThemeColorVars.backgroundSecondaryLight,
    borderRadius: '4px',
  },
]);
export const success = style({
  background: globalThemeColorVars.backgroundTertiary,
  cursor: 'pointer',
});

export const wait = style({
  background: globalThemeColorVars.backgroundSecondary,
});

export const stepIcon = style({
  width: '32px',
  height: '32px',
});

export const stepper = style({
  position: 'relative',
});

globalStyle(`${stepper} .css-ff5l4u-MuiStepConnector-root`, {
  display: 'none',
});

globalStyle(`${stepper} .css-14yr603-MuiStepContent-root`, {
  borderLeft: 'none',
});

globalStyle(`${stepper} .css-14sza3e-MuiStepLabel-root.MuiStepLabel-alternativeLabel`, {
  flexDirection: 'row',
});

globalStyle(`${stepper} .css-16ubnlw-MuiStepLabel-labelContainer`, {
  width: 'auto',
  paddingLeft: spacing(2),
  color: globalThemeColorVars.fontsQuaternary,
});

globalStyle(`${stepper} .css-16ubnlw-MuiStepLabel-labelContainer`, {
  width: 'auto',
  paddingLeft: spacing(2),
  color: globalThemeColorVars.fontsPrimary,
});

globalStyle(`${stepper} .Mui-disabled`, {
  width: 'auto',
});

globalStyle(`${stepper} .css-mt2lf4-MuiStepLabel-label`, {
  width: 'auto',
  color: globalThemeColorVars.fontsPrimary,
  fontWeight: 500,
  ...fontSizeMap['14/20'],
  margin: 0,

  '@media': {
    [mediaQueryDesktop]: {
      ...fontSizeMap['16/24'],
    },
  },
});

globalStyle(`${stepper} .css-mt2lf4-MuiStepLabel-label.Mui-disabled`, {
  color: globalThemeColorVars.fontsQuaternary,
});

globalStyle(`${stepper} .css-mt2lf4-MuiStepLabel-label.MuiStepLabel-alternativeLabel`, {
  margin: '0',
});

globalStyle(`${stepper} .css-1k8dw67-MuiSvgIcon-root-MuiStepIcon-root`, {
  color: globalThemeColorVars.fontsGray,
});

globalStyle(`${stepper} .css-1k8dw67-MuiSvgIcon-root-MuiStepIcon-root.Mui-active`, {
  color: globalThemeColorVars.fillSecondaryLight,
});

globalStyle(`${stepper} .css-1k8dw67-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed`, {
  color: globalThemeColorVars.fontsBaseGreen,
});

globalStyle(`${stepper} .css-1u79k1e-MuiStepIcon-text`, {
  fontWeight: 500,
  ...fontSizeMap['20/30'],
});
