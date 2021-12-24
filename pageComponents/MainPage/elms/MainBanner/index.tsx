import Typography from '@primitives/Typography';
import Wrapper from '@primitives/Wrappper';

import useMediaQuery from '@hooks/useMediaQuery';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import OfferForm from '../OfferForm';
import {
  banner, headerColor, inner, offerFormWrapper, TitleBlock, titleInner, wrapper,
} from './style.css';

const TITLE = 'Предложим реальную цену за 2 минуты';
const SUB_TITLE = 'Заполните онлайн форму и рассчитайте точную стоимость выкупа автомобиля. Деньги сразу!';

const MainBanner = () => {
  const isDesktop = useMediaQuery(mediaQueryDesktop);

  return (
    <Wrapper as="section" className={wrapper}>
      {isDesktop && <div className={banner} />}

      <div className={inner}>
        <div className={TitleBlock}>
          <div className={titleInner}>
            <Typography as="h1" type="title" className={headerColor}>
              {TITLE}
            </Typography>
            <Typography as="h3" type="subTitle" className={headerColor}>
              {SUB_TITLE}
            </Typography>
          </div>
        </div>
        <OfferForm className={offerFormWrapper} />
      </div>
    </Wrapper>
  );
};

export default MainBanner;
