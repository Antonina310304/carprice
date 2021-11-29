import cn from 'classnames';

import HowItWorks from '@components/MainPage/elms/HowItWorks';
import MainBanner from '@components/MainPage/elms/MainBanner';
import Reviews from '@components/MainPage/elms/Reviews';

import Wrapper from '@primitives/Wrappper';

import { padding } from '../../utils/padding';
import { sectionWrapper } from './styles.css';

import { mainContainer } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

const MainPage = () => {
  console.log(padding(5, 5));
  return (
    <>
      <MainBanner />
      <Wrapper as={'section'} bgColor={globalThemeColorVars.backgroundSecondary} className={sectionWrapper}>
        <div className={mainContainer}>
          <HowItWorks />
        </div>
      </Wrapper>
      <Wrapper as={'section'} className={cn(sectionWrapper, mainContainer)}>
        <Reviews />
      </Wrapper>
    </>
  );
};

export default MainPage;
