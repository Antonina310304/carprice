import { style, styleVariants } from '@vanilla-extract/css';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { globalThemeColorVars, globalThemeDurationVars } from '@styles/globalTheme';

export const dropdownWrapper = style({
  position: 'relative',
});

export const wrapper = style({
  display: 'flex',
  padding: '10px 16px',
  alignItems: 'center',
  cursor: 'pointer',
  justifyContent: 'space-between',
  '@media': {
    [mediaQueryDesktop]: {
      padding: '14px 16px',
    },
  },
});

export const toggleTitle = styleVariants({
  open: {
    '@media': {
      [mediaQueryDesktop]: {
        transition: `color ${globalThemeDurationVars.m250} ease-in-out`,
        color: globalThemeColorVars.menuSecondary,
      },
    },
  },
  close: {
    '@media': {
      [mediaQueryDesktop]: {
        transition: `color ${globalThemeDurationVars.m250} ease-in-out`,
        color: globalThemeColorVars.menuPrimary,
      },
    },
  },
});

export const title = style({
  display: 'block',
  textDecoration: 'none',
  fontSize: '16px',
  lineHeight: '24px',
  margin: 0,
  color: globalThemeColorVars.menuSecondary,
});

export const titleLink = style({
  '@media': {
    [mediaQueryDesktop]: {
      color: globalThemeColorVars.menuPrimary,
      transition: `color ${globalThemeDurationVars.m250} ease-in-out`,

      ':hover': {
        color: globalThemeColorVars.menuSecondary,
        transition: `color ${globalThemeDurationVars.m250} ease-in-out`,
      },
    },
  },
});

export const iconWrapper = style({
  display: 'block',
  transition: 'transform 0.2s ease-in-out',
  transformOrigin: '50% 50%',
  height: '6px',
  marginLeft: '10px',
});

export const iconArrow = style({
  '@media': {
    [mediaQueryDesktop]: {
      transition: `fill ${globalThemeDurationVars.m250} ease-in-out`,
      fill: globalThemeColorVars.fillSecondary,
    },
  },
});

export const toggleIcon = styleVariants({
  open: {
    transform: 'rotate(180deg)',
  },
  close: {
    transform: 'rotate(0)',
  },
});

export const toggleSvg = styleVariants({
  open: {
    '@media': {
      [mediaQueryDesktop]: {
        transition: `fill ${globalThemeDurationVars.m250} ease-in-out`,
        fill: globalThemeColorVars.fillTertiary,
      },
    },
  },
  close: {
    transition: `fill ${globalThemeDurationVars.m250} ease-in-out`,
  },
});
