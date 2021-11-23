import React, { memo } from 'react';

import { IMenuItem } from '@components/Layout/elms/PageHeader/types';

import LinkWrapper from '@primitives/LinkWrapper';

import { title, list } from './style.css';

interface IDropDownMenuList {
  menuList: IMenuItem[];
}

const DropDownMenuList = ({ menuList }: IDropDownMenuList) => {
  return (
    <ul className={list}>
      {menuList.map((item) => (
        <li key={item.href}>
          <LinkWrapper className={title} href={item.href} isExternal={true}>
            {item.title}
          </LinkWrapper>
        </li>
      ))}
    </ul>
  );
};

export default memo(DropDownMenuList);
