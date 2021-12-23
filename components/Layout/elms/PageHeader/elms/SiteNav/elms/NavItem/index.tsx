import cn from 'classnames';

import type { NextPage } from 'next';
import {
  createRef, memo, useCallback, useEffect, useState,
} from 'react';

import { PageHeaderNavElms } from '@components/Layout/elms/PageHeader/types';

import Icon from '@primitives/Icon';
import LinkWrapper from '@primitives/LinkWrapper';

import DropDownMenuList from '../DropDownMenuList';
import DropDownMenuWrapper from '../DropDownMenuWrapper';
import {
  iconWrapper,
  title,
  dropdownWrapper,
  toggleIcon,
  wrapper,
  iconArrow,
  toggleTitle,
  toggleSvg,
  titleLink,
} from './style.css';

interface INavItem {
  navElement: PageHeaderNavElms;
}

const NavItem: NextPage<INavItem> = function ({ navElement }) {
  const ref = createRef<HTMLDivElement>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOutside = useCallback(
    (evt) => {
      if (ref.current && !ref.current.contains(evt.target as Node)) {
        setIsOpen(false);
      }
    },
    [ref],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      if (isOpen) {
        document.removeEventListener('click', handleClickOutside);
      }
    };
  }, [handleClickOutside, isOpen]);

  const handleToggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <div ref={ref} className={dropdownWrapper}>
      {navElement.dropdown && (
        <div className={wrapper} onClick={handleToggle}>
          <p className={cn(toggleTitle[isOpen ? 'open' : 'close'], title)}>{navElement.title}</p>
          <i className={cn(iconWrapper, toggleIcon[isOpen ? 'open' : 'close'])}>
            <Icon
              className={cn(iconArrow, toggleSvg[isOpen ? 'open' : 'close'])}
              icon="arrow"
              width={10}
              height={6}
            />
          </i>
        </div>
      )}
      {navElement.href && (
        <LinkWrapper
          href={navElement.href}
          className={cn(wrapper, title, titleLink, toggleTitle.close)}
          isExternal
        >
          {navElement.title}
        </LinkWrapper>
      )}

      {navElement.dropdown && (
        <DropDownMenuWrapper isOpen={isOpen}>
          <DropDownMenuList menuList={navElement.dropdown} />
        </DropDownMenuWrapper>
      )}
    </div>
  );
};

export default memo(NavItem);
