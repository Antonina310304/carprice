import type { NextPage } from 'next';
import { memo } from 'react';

import { lisItem, list } from '@components/Layout/elms/PageHeader/elms/SiteNav/style.css';

import NavItem from './elms/NavItem';

import { PageHeaderNavElms } from '../../types';
import menuList from './data';

interface ISiteNav {
  className?: string;
}

const SiteNav: NextPage<ISiteNav> = function ({ className }) {
  return (
    <nav className={className}>
      <ul className={list}>
        {menuList.map((item: PageHeaderNavElms) => (
          <li className={lisItem} key={item.title}>
            <NavItem navElement={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(SiteNav);
