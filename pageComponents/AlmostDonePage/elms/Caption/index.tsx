import { NextPage } from 'next';
import { memo, ReactNode } from 'react';

import Typography from '@primitives/Typography';

import { caption } from './style.css';

interface ICaption {
  title: ReactNode;
}

const Caption: NextPage<ICaption> = function ({ title }) {
  return (
    <Typography as="p" type="main" className={caption}>
      {title}
    </Typography>
  );
};

export default memo(Caption);
