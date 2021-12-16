import { makeStyles } from '@material-ui/core/styles';

import { globalThemeColorVars } from '@styles/globalTheme';

export const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: globalThemeColorVars.borderDefaultInputs,
    },
  },
});
