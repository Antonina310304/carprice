import cn from 'classnames';

import { NextPage } from 'next';
import React from 'react';

import { typographyVariants } from '@primitives/Typography/css/index.css';

import { itemStyle, wrapper } from './style.css';

interface IList {
  list: string[];
}

const List: NextPage<IList> = ({ list }) => {
  return (
    <ul className={wrapper}>
      {list.map((item, idx) => (
        <li className={cn(typographyVariants.main, itemStyle)} key={idx}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
