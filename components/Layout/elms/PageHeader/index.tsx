import type { NextPage } from 'next';
import { memo, useCallback, useState } from 'react';

import PersonalLink from '@components/Layout/elms/PageHeader/elms/PersonalLink';
import Region from '@components/Region';

import Burger from '@primitives/Burger';
import Logo from '@primitives/Logo';
import Telephone from '@primitives/Telephone';

import useMediaQuery from '@hooks/useMediaQuery';

import { DESKTOP, TABLET } from '@constants/mediaQuery';

import { mainContainer } from '@styles/baseStyle';
import NavWrapper from './elms/NavWrapper';
import SiteNav from './elms/SiteNav';

import {
  regionWrapper,
  regionMobileWrapper,
  tabletWrapper,
  siteNavWrapper,
  logoWrapper,
  telWrapper,
  burgerWrapper,
  headerWrapper,
  burger,
  header,
} from './style.css';

interface IPageHeader {
  openRegionModal: (arg: boolean) => void;
}
const PageHeader: NextPage<IPageHeader> = function ({ openRegionModal }) {
  const isDesktop = useMediaQuery(`(min-width: ${DESKTOP}px)`);
  const isTablet = useMediaQuery(`(min-width: ${TABLET}px)`);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
    document.body.style.overflow = !isOpenMenu ? 'hidden' : '';
  }, [isOpenMenu]);

  return (
    <header className={header}>
      <div className={headerWrapper}>
        <div className={tabletWrapper}>
          {!isDesktop && (
            <div className={burgerWrapper}>
              <Burger className={burger} isOpen={isOpenMenu} toggle={toggleMenu} />
            </div>
          )}
          <Logo className={logoWrapper} />
          {isTablet && (
            <>
              <Region openRegionModal={openRegionModal} className={regionWrapper} />
              <Telephone />
            </>
          )}
          <PersonalLink />
        </div>
      </div>

      {isDesktop && (
        <div className={mainContainer}>
          <SiteNav />
        </div>
      )}
      {!isDesktop && ( // выпадающее меню
        <NavWrapper isOpen={isOpenMenu}>
          {!isTablet && <Region openRegionModal={openRegionModal} className={regionMobileWrapper} />}

          <SiteNav />
          <div className={siteNavWrapper} />
          {!isTablet && <Telephone className={telWrapper} isNeedIcon />}
        </NavWrapper>
      )}
    </header>
  );
};

export default memo(PageHeader);
