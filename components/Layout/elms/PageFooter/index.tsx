import cn from 'classnames';

import type { NextPage } from 'next';
import { memo } from 'react';

import SocialLinks from '@components/Layout/elms/PageFooter/elms/SocialLinks';
import Region from '@components/Region';

import Logo from '@primitives/Logo';
import Telephone from '@primitives/Telephone';
import Typography from '@primitives/Typography';

import NavFooterList from './elms/NavFooterList';

import { copyRight, footer, footerBottom, footerLogo, footerTop, footerTopItem, regionWrapper } from './style.css';

import { mainContainer, textUppercase } from '@styles/baseStyle';

interface IPageFooter {
  openRegionModal: (arg: boolean) => void;
}

const PageFooter: NextPage<IPageFooter> = ({ openRegionModal }) => {
  return (
    <footer className={footer}>
      <div className={mainContainer}>
        <div className={footerTop}>
          <Logo className={footerLogo} />
          <Region className={cn(regionWrapper, footerTopItem)} openRegionModal={openRegionModal} />
          <Telephone className={footerTopItem} />
        </div>
        <div className={footerBottom}>
          <NavFooterList />
          <SocialLinks />
        </div>
        <Typography className={copyRight} type={'info'}>
          © 2014-{new Date().getFullYear()} <span className={textUppercase}>ооо «селаникар»</span>, официальный сайт,
          все права защищены.
        </Typography>
      </div>
    </footer>
  );
};

export default memo(PageFooter);
