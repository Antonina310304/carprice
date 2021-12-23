import cn from 'classnames';

import { NextPage } from 'next';
import { memo } from 'react';

import { NavItem } from '@components/Layout/types';

import LinkWrapper from '@primitives/LinkWrapper';

import footerNavList from './footerNavList';
import { styleLink, wrapper } from './style.css';

interface INavFooterList {
  className?: string;
}
const NavFooterList: NextPage<INavFooterList> = function ({ className }) {
  return (
    <ul className={cn(className, wrapper)}>
      {footerNavList.map((item: NavItem) => (
        <li key={item.href}>
          <LinkWrapper href={item.href} isExternal className={styleLink}>
            {item.title}
          </LinkWrapper>
        </li>
      ))}
    </ul>
  );
};

export default memo(NavFooterList);
