import type { NextPage } from 'next';
import { memo, useState } from 'react';

import PersonalLink from '@components/Layout/elms/PageHeader/elms/PersonalLink';
import Region from '@components/Region';

import Burger from '@primitives/Burger';
import Logo from '@primitives/Logo';
import Telephone from '@primitives/Telephone';

import useMediaQuery from '@hooks/useMediaQuery';

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
} from './style.css';

import { DESKTOP, TABLET } from '@constants/mediaQuery';

const PageHeader: NextPage = () => {
  const isDesktop = useMediaQuery(`(min-width: ${DESKTOP}px)`);
  const isTablet = useMediaQuery(`(min-width: ${TABLET}px)`);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header>
      <div className={headerWrapper}>
        <div className={tabletWrapper}>
          {!isDesktop && <Burger className={burgerWrapper} isOpen={isOpenMenu} toggle={setIsOpenMenu} />}
          <Logo className={logoWrapper} />
          {isTablet && (
            <>
              <Region className={regionWrapper} />
              <Telephone />
            </>
          )}
          <PersonalLink />
        </div>
      </div>

      {isDesktop && (
        <div className={headerWrapper}>
          <SiteNav />
        </div>
      )}
      {!isDesktop && ( // выпадающее меню
        <NavWrapper isOpen={isOpenMenu}>
          <Region className={regionMobileWrapper} />
          <SiteNav />
          <div className={siteNavWrapper} />
          <Telephone className={telWrapper} isNeedIcon={true} />
        </NavWrapper>
      )}
    </header>
  );
};

export default memo(PageHeader);
