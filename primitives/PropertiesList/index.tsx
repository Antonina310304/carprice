import cn from 'classnames';

import { NextPage } from 'next';
import { memo } from 'react';

import { textMedium } from '@styles/baseStyle';
import { carDetailList, itemStyle, valueStyle } from './style.css';

interface IPropertiesList {
  className?: string;
  list: {
    [key: string]: string;
  };
}

const PropertiesList: NextPage<IPropertiesList> = function ({ className, list }) {
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
