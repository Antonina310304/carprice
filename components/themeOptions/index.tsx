import { createTheme, ThemeOptions } from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#38AE83',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#1E1F21',
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
