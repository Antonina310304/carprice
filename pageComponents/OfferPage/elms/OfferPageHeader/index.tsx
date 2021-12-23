import { NextPage } from 'next';
import Image from 'next/image';

import Offer from '@pages/OfferPage/elms/OfferPageHeader/Offer';

import Typography from '@primitives/Typography';
import { typographyVariants } from '@primitives/Typography/css/index.css';

import useMediaQuery from '@hooks/useMediaQuery';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { mainContainer, textLeft } from '@styles/baseStyle';
import {
  flex, imageWrapper, offerWrapper, titleBlock, wrapper,
} from './style.css';

const TITLE = 'Ваше предложение готово!';
const SUBTITLE = 'Мы будем рады выкупить вашу машину!';

interface IOfferPageHeader {
  handleClick: () => void;
}

const OfferPageHeader: NextPage<IOfferPageHeader> = function ({ handleClick }) {
  const isDesktop = useMediaQuery(mediaQueryDesktop);
  return (
    <>
      <div className={wrapper}>
        <div className={mainContainer}>
          <div className={flex}>
            <div className={titleBlock}>
              <Typography className={textLeft} as="h1" type="title">
                {TITLE}
              </Typography>
              <p className={typographyVariants.subheadOfferPage}>{SUBTITLE}</p>
            </div>
            <div className={imageWrapper}>
              {!isDesktop && (
                <Image src="/static/images/offer/header_image.svg" width="288px" height="194px" alt={TITLE} />
              )}
              {isDesktop && (
                <Image src="/static/images/offer/header_image.svg" width="416px" height="278px" alt={TITLE} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={offerWrapper}>
        <Offer handleClick={handleClick} />
      </div>
    </>
  );
};

export default OfferPageHeader;
