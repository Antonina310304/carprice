import Image from 'next/image';
import { memo } from 'react';

import Typography from '@primitives/Typography';

import useMediaQuery from '@hooks/useMediaQuery';

import { DESKTOP } from '@constants/mediaQuery';

import howItWorks from './howItWorks';
import {
  titleBlock, item, stepsList, stepsListItem, stepsListInner, imgWrapper,
} from './style.css';
import { IHowItWorks } from './types';

const TITLE = 'Вот как это работает';
const SUBTITLE = 'Всего три простых шага, чтобы продать машину в CarPrice ';
const MOBILE_HEIGHT = '100px';
const DESKTOP_HEIGHT = '149px';

const HowItWorks = function () {
  const isDesktop = useMediaQuery(`(min-width: ${DESKTOP}px)`);
  return (
    <>
      <div className={titleBlock}>
        <Typography as="h2" type="sectionTitle" align="center">
          {TITLE}
        </Typography>
        <Typography as="h3" type="sectionSubTitle" align="center">
          {SUBTITLE}
        </Typography>
      </div>
      <ul className={stepsList}>
        {howItWorks.map((i: IHowItWorks) => (
          <li className={stepsListItem} key={i.title}>
            <div className={stepsListInner}>
              <div className={imgWrapper}>
                <Image src={i.img} width="120%" height={isDesktop ? DESKTOP_HEIGHT : MOBILE_HEIGHT} alt={i.title} />
              </div>
              <Typography type="headLine" align="inherit">
                {i.title}
              </Typography>
              <Typography type="main" align="inherit">
                {i.text}
              </Typography>
            </div>
          </li>
        ))}
        <div className={item} />
      </ul>
    </>
  );
};

export default memo(HowItWorks);
