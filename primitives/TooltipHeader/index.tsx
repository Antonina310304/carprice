import { NextPage } from 'next';
import { memo } from 'react';

import { titleStyle } from './style.css';

interface ITooltipHeader {
  title: string;
}

const TooltipHeader: NextPage<ITooltipHeader> = ({ title }) => {
  return <p className={titleStyle}>{title}</p>;
};

export default memo(TooltipHeader);
