import React from 'react';

import Typography from '@primitives/Typography';
import { typographyVariants } from '@primitives/Typography/css/index.css';
import WithButton from '@primitives/WithButton';

import useMediaQuery from '@hooks/useMediaQuery';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import { getDate } from '@utils/getDate';
import { getNameDay } from '@utils/getNameDay';

import { button, price, textWrapper, wrapper, blockWrapper, mainOfferBlock, text } from './style.css';

import { textMedium } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

const BUTTON_TEXT = 'Сохранить';
const TITLE = 'Ваше предложение';
const SUBTITLE = 'Предложение о цене действительно до  ';

const mockDate = '2021-12-17 14:17:00';

const Offer = ({ handleClick }) => {
  const isDesktop = useMediaQuery(mediaQueryDesktop);
  return (
    <div className={wrapper}>
      <div className={blockWrapper}>
        <p className={typographyVariants.subheadOfferPage}>{TITLE}</p>
        {isDesktop && <WithButton className={button} text={BUTTON_TEXT} onClick={handleClick} />}
      </div>
      <div className={mainOfferBlock}>
        <p className={price}>400 000 ₽</p>
        <Typography as={'p'} type={'main'} align={'inherit'} color={globalThemeColorVars.fontsQuaternary}>
          {SUBTITLE} {getNameDay(mockDate)}, {getDate(mockDate)}
        </Typography>
      </div>
      {!isDesktop && <WithButton className={button} text={BUTTON_TEXT} onClick={handleClick} />}
      {isDesktop && (
        <div className={textWrapper}>
          <Typography as={'p'} type={'base'} className={text}>
            Audi 2021 A6 V (C8)
          </Typography>
          <Typography as={'p'} type={'base'} className={text} color={globalThemeColorVars.fontsQuaternary}>
            4-Cyl, 2.5 Liter
          </Typography>
          <Typography as={'p'} type={'base'} className={text} color={globalThemeColorVars.fontsQuaternary}>
            200 000 км
          </Typography>
          <Typography as={'p'} className={text} type={'base'}>
            <span className={textMedium}>VIN:</span> XX0XXXXXX00000000
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Offer;
