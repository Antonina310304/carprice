import BackgroundColors from '@styles/theme/types/BackgroundColors';
import { BaseColors } from '@styles/theme/types/BaseColors';
import BorderColors from '@styles/theme/types/BorderColors';
import FillColors from '@styles/theme/types/FillColors';
import FontsColors from '@styles/theme/types/FontsColors';
import LinkColors from '@styles/theme/types/LinkColors';
import MenuFontColors from '@styles/theme/types/MenuFontColors';
import { ShadowColors } from '@styles/theme/types/ShadowColors';

export type Colors =
  | BackgroundColors
  | BorderColors
  | FillColors
  | FontsColors
  | LinkColors
  | MenuFontColors
  | BaseColors
  | ShadowColors;
