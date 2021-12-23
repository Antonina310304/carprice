import { memo } from 'react';

import { NavItem } from '@components/Layout/types';

import LinkWrapper from '@primitives/LinkWrapper';

import { title, list } from './style.css';

interface IDropDownMenuList {
  menuList: NavItem[];
}

const DropDownMenuList = function ({ menuList }: IDropDownMenuList) {
  return (
    <ul className={list}>
      {menuList.map((item) => (
        <li key={item.href}>
          <LinkWrapper className={title} href={item?.href} isExternal>
            {item.title}
          </LinkWrapper>
        </li>
      ))}
    </ul>
  );
};

export default memo(DropDownMenuList);
