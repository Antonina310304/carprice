import { createGlobalTheme } from '@vanilla-extract/css';

import Theme from '@styles/theme';

const theme = new Theme();

export const globalThemeColorVars = createGlobalTheme(':root', theme.colors);
export const globalThemeDurationVars = createGlobalTheme(':root', Theme.durations);
