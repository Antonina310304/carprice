import cn from 'classnames';

import Wrapper from '@primitives/Wrappper';

import { mainContainer } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';
import HowItWorks from './elms/HowItWorks';
import MainBanner from './elms/MainBanner';
import Reviews from './elms/Reviews';

import { sectionWrapper } from './styles.css';

const MainPage = function () {
  return (
    <>
      <MainBanner />
      <Wrapper as="section" bgColor={globalThemeColorVars.backgroundSecondary} className={sectionWrapper}>
        <div className={mainContainer}>
          <HowItWorks />
        </div>
      </Wrapper>
      <Wrapper as="section" className={cn(sectionWrapper, mainContainer)}>
        <Reviews />
      </Wrapper>
    </>
  );
};

export default MainPage;
