import { style, styleVariants } from '@vanilla-extract/css';
import { globalThemeColorVars } from '@styles/globalTheme';
import { typographyVariants } from '@primitives/Typography/css/index.css';

export const stepperState = styleVariants({
  success: {
    background: globalThemeColorVars.backgroundTertiary,
    cursor: 'pointer',
  },
  wait: {
    background: globalThemeColorVars.backgroundSecondary,
  },
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
