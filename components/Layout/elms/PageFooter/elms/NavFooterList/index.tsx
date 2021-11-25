import cn from 'classnames';

import { NextPage } from 'next';
import React, { memo } from 'react';

import { NavItem } from '@components/Layout/types';

import LinkWrapper from '@primitives/LinkWrapper';

import { FooterNavList } from './data';
import { styleLink, wrapper } from './style.css';

interface INavFooterList {
  className?: string;
}
const NavFooterList: NextPage<INavFooterList> = ({ className }) => {
  return (
    <ul className={cn(className, wrapper)}>
      {FooterNavList.map((item: NavItem) => (
        <li key={item.href}>
          <LinkWrapper href={item.href} isExternal={true} className={styleLink}>
            {item.title}
          </LinkWrapper>
        </li>
      ))}
    </ul>
  );
};

export default memo(NavFooterList);
