import cn from 'classnames';

import { NextPage } from 'next';
import React, { memo } from 'react';

import { carDetailList, itemStyle, valueStyle } from './style.css';

import { textMedium } from '@styles/baseStyle';

interface IPropertiesList {
  className?: string;
  list: {
    [key: string]: string;
  };
}

const PropertiesList: NextPage<IPropertiesList> = ({ className, list }) => {
  return (
    <ul className={cn(className, carDetailList)}>
      {Object.entries(list).map(([key, value]) => (
        <li key={key} className={itemStyle}>
          <span className={textMedium}> {key}</span>
          {'  '}
          <span className={valueStyle}>{value}</span>
        </li>
      ))}
    </ul>
  );
};

export default memo(PropertiesList);
