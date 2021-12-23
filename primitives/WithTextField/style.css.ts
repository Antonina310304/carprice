import { makeStyles } from '@mui/styles';

import { globalThemeColorVars } from '@styles/globalTheme';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: globalThemeColorVars.borderDefaultInputs,
    },
  },
});

export default useStyles;
