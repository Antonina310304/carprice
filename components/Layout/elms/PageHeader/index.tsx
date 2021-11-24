import type { NextPage } from 'next';
import { memo, useState } from 'react';

import PersonalLink from '@components/Layout/elms/PageHeader/elms/PersonalLink';
import Region from '@components/Region';

import Burger from '@primitives/Burger';
import LinkWrapper from '@primitives/LinkWrapper';
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

interface IPageHeader {
  openRegionModal: (arg: boolean) => void;
}
const PageHeader: NextPage<IPageHeader> = ({ openRegionModal }) => {
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
              <Region openRegionModal={openRegionModal} className={regionWrapper} />
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
          {!isTablet && <Region openRegionModal={openRegionModal} className={regionMobileWrapper} />}

          <SiteNav />
          <div className={siteNavWrapper} />
          {!isTablet && <Telephone className={telWrapper} isNeedIcon={true} />}
        </NavWrapper>
      )}
    </header>
  );
};

export default memo(PageHeader);
