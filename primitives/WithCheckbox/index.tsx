import { NextPage } from 'next';
import { Checkbox, FormControlLabel } from '@mui/material';

import Typography from '@primitives/Typography';

interface IWithCheckbox {
  label: string;
  [key: string]: any;
}
const WithCheckbox: NextPage<IWithCheckbox> = function ({ label, ...otherProps }) {
  return (
    <FormControlLabel
      control={<Checkbox sx={{ m: 0, pt: 1, pb: 1 }} {...otherProps} />}
      label={<Typography type="min">{label}</Typography>}
    />
  );
};

export default WithCheckbox;
