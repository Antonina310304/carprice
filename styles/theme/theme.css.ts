import { createGlobalTheme } from '@vanilla-extract/css';
import { Theme } from './Theme';

const theme = new Theme();

const globalTheme = createGlobalTheme(':root', theme.colors);

export default globalTheme;
