import { NextPage } from 'next';
import { memo, ReactNode } from 'react';

import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

import { subCaption, label, groupWrapper } from '@components/WithRadioGroup/style.css';

import Caption from '@pages/AlmostDonePage/elms/Caption';

import Typography from '@primitives/Typography';

interface IRadioGroup {
  title: ReactNode;
  subTitle?: string;
  name: string;
  value?: string;
  handleChange: (arg: any) => void;
  list: {
    value: string;
    label: string;
  }[];
}

const WithRadioGroup: NextPage<IRadioGroup> = function ({
  title, name, handleChange, value, subTitle, list,
}) {
  return (
    <>
      <Caption title={title} />

      {subTitle && (
        <Typography as="p" type="main" className={subCaption}>
          {subTitle}
        </Typography>
      )}
      <RadioGroup value={value} onChange={handleChange} className={groupWrapper} row aria-label="gender" name={name}>
        {list.map((item) => (
          <FormControlLabel
            className={label}
            key={item.value}
            value={item.value}
            control={<Radio sx={{ m: 0, pt: 0, pb: 0 }} />}
            label={(
              <Typography as="span" type="main">
                {item.label}
              </Typography>
            )}
          />
        ))}
      </RadioGroup>
    </>
  );
};

export default memo(WithRadioGroup);
