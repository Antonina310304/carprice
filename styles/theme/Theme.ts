import BackgroundColors from './types/BackgroundColors';
import FontsColors from './types/FontsColors';
import MenuFontColors from './types/MenuFontColors';
import LinkColors from './types/LinkColors';
import BorderColors from './types/BorderColors';

export class Theme {
  public colors: Record<any, string>;

  constructor() {
    this.colors = this.generateColors();
  }

  private generateColors() {
    const backgroundColors: Record<BackgroundColors, string> = {
      backgroundPrimary: '#ffffff',
      backgroundSecondary: '#F4F6F9',
      backgroundTertiary: '#EDFAF5',
    };

    const fontsColors: Record<FontsColors, string> = {
      fontsPrimary: '#1E1F21', // --black_900 на текущем сайте
      fontsSecondary: '#757A85', // --black_700
    };

    const menuFontColors: Record<MenuFontColors, string> = {
      menuPrimary: '#757A85',
      menuHover: '#1E1F21',
    };

    const linkColors: Record<LinkColors, string> = {
      linkPrimary: '#4B7AF4', // Голубой
      linkSecondary: '#000000',
      linkHoverPrimary: '#46474A', // --black_800
      linkHoverSecondary: '#2dab66', // зеленый
    };

    const borderColors: Record<BorderColors, string> = {
      borderPrimary: '#D9DDE2', // --black_300
    };

    return {
      ...backgroundColors,
      ...fontsColors,
      ...linkColors,
      ...menuFontColors,
      ...borderColors,
    };
  }
}
