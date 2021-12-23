import chroma from 'chroma-js';

import { BaseColors } from '@styles/theme/types/BaseColors';
import { BorderRadius } from '@styles/theme/types/BorderRadius';
import { ShadowColors } from '@styles/theme/types/ShadowColors';
import BackgroundColors from './types/BackgroundColors';
import BorderColors from './types/BorderColors';
import Durations from './types/Durations';
import FillColors from './types/FillColors';
import FontsColors from './types/FontsColors';
import LinkColors from './types/LinkColors';
import MenuFontColors from './types/MenuFontColors';

import { Colors } from './types';

export default class Theme {
  colors!: Record<Colors, string>;

  spacing: Record<number, string>;

  static spacingStep = 8;

  constructor() {
    this.colors = this.generateColors();
    this.spacing = this.generateSpacing();
  }

  static alphaColor(color: string, alpha: number) {
    return chroma(color).alpha(alpha).css();
  }

  static durationTimes: Record<`num_${Durations}`, number> = {
    num_m250: 250,
    num_m200: 200,
    num_m150: 150,
  };

  static durations: Record<Durations, string> = {
    m250: `${Theme.durationTimes.num_m250}ms`,
    m200: `${Theme.durationTimes.num_m200}ms`,
    m150: `${Theme.durationTimes.num_m150}ms`,
  };

  static borderRadius: Record<BorderRadius, string> = {
    base: '4px',
    medium: '8px',
  };

  private generateSpacing() {
    return new Array(15).fill('').reduce((acc, item, idx) => {
      acc[idx] = `${idx * Theme.spacingStep}px`;
      return acc;
    }, {});
  }

  private generateColors() {
    const baseColors: Record<BaseColors, string> = {
      black: '#000000',
      white: '#ffffff',
      green: '#38AE83',
      red: '#E25D4B',
      yellow: '#F8DD53',
    };

    const backgroundColors: Record<BackgroundColors, string> = {
      transparent: 'transparent',
      backgroundPrimary: '#ffffff',
      backgroundSecondary: '#F4F6F9',
      backgroundSecondaryLight: '#ECF1FF',
      backgroundTertiary: '#EDFAF5',
      backgroundQuaternary: Theme.alphaColor('#f0f2f6', 0.74),
      backgroundGray: '#EEF0F4',
    };

    const fontsColors: Record<FontsColors, string> = {
      fontsPrimary: '#1E1F21', // --black_900 на текущем сайте
      fontsSecondary: '#757A85', // --black_700
      fontsTertiary: '#9FA3AD', // --black_500
      fontsQuaternary: '#8A8E99', // black_600,
      fontsLightGreen: Theme.alphaColor(baseColors.green, 0.3), // greenTransparent,
      fontsBaseGreen: '#37B587', // greenTransparent,
    };

    const menuFontColors: Record<MenuFontColors, string> = {
      menuPrimary: '#757A85',
      menuSecondary: '#1E1F21',
      menuTertiary: '#1E1F21',
      menuQuaternary: '#8A8E99',
    };

    const shadowColors: Record<ShadowColors, string> = {
      shadowModalPrimary: Theme.alphaColor(baseColors.black, 0.2),
    };

    const linkColors: Record<LinkColors, string> = {
      linkPrimary: '#4B7AF4', // Голубой
      linkSecondary: '#000000',
      linkHoverPrimary: '#46474A', // --black_800
      linkHoverSecondary: '#2dab66', // зеленый
    };

    const borderColors: Record<BorderColors, string> = {
      borderPrimary: '#D9DDE2', // --black_300
      borderSecondary: '#37B587',
      borderTertiary: '#9FA3AD',
      borderLight: '#9FA3AD',
      borderDropDown: '#EEF0F4',
      borderDefaultInputs: '#DADADA',
    };

    const svgFill: Record<FillColors, string> = {
      fillPrimary: '#37B587', // --green
      fillSecondary: '#757A85', // --серый
      fillTertiary: '#1E1F21', // --темно-серый
      fillDark: '#46474A', // --темно-серый
      fontsGray: '#9FA3AD',
      fillSecondaryLight: '#4B7AF4', // Голубой
      fillCheck: '#C2C5CB', // Голубой
    };

    return {
      ...backgroundColors,
      ...fontsColors,
      ...linkColors,
      ...menuFontColors,
      ...borderColors,
      ...svgFill,
      ...baseColors,
      ...shadowColors,
    };
  }
}
