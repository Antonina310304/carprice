import Typography from '@primitives/Typography';
import Wrapper from '@primitives/Wrappper';

import { headerColor, inner, TitleBlock, wrapper } from './style.css';

const TITLE = 'Предложим реальную цену за 2 минуты';
const SUB_TITLE = 'Заполните онлайн форму и рассчитайте точную стоимость выкупа автомобиля. Деньги сразу!';

const MainBanner = () => {
  return (
    <Wrapper as={'section'} className={wrapper}>
      <div className={inner}>
        <div className={TitleBlock}>
          <Typography as={'h1'} type={'title'} className={headerColor}>
            {TITLE}
          </Typography>
          <Typography as={'h3'} type={'subTitle'} className={headerColor}>
            {SUB_TITLE}
          </Typography>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainBanner;
