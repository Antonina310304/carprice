import Image from 'next/image';
import React from 'react';

import PageContentHeader from '@components/PageContentHeader';

import { image, pageHeader, titleBlock } from '@pages/AlmostDonePage/style.css';

import Typography from '@primitives/Typography';

import useMediaQuery from '@hooks/useMediaQuery';

import { mediaQueryDesktop } from '@constants/mediaQuery';

const MAIN_TITLE_TEXT = 'Почти готово!';
const MAIN_SUBTITLE_TEXT = 'Поделитесь информацией о своей машине, и мы предложим вам реальную цену';

const PageHeader = () => {
  const isDesktop = useMediaQuery(mediaQueryDesktop);
  return (
    <div className={pageHeader}>
      <div className={isDesktop ? titleBlock : ''}>
        <Typography as={'h1'} type={'title'}>
          {MAIN_TITLE_TEXT}
        </Typography>
        <Typography as={'h3'} type={'sectionSubTitle'}>
          {MAIN_SUBTITLE_TEXT}
        </Typography>
      </div>
      <div className={image}>
        {isDesktop && (
          <Image src={'/static/images/almostDone/car.svg'} width={'221px'} height={'140px'} alt={'Почти готово!'} />
        )}
        {!isDesktop && (
          <Image src={'/static/images/almostDone/car.svg'} width={'189px'} height={'119px'} alt={'Почти готово!'} />
        )}
      </div>
    </div>
  );
};

export default PageHeader;
