import cn from 'classnames';

import { useCallback, useState } from 'react';

import OfferPageHeader from '@pages/OfferPage/elms/OfferPageHeader';
import Advantages from '@pages/OfferPage/elms/advantages';

import Typography from '@primitives/Typography';
import WithButton from '@primitives/WithButton';

import { mainContainer } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

import {
  aside, button, headerFirstStepWrapper, mainContent, page, pageFooter, pageWrapper,
// eslint-disable-next-line import/extensions
} from './style.css.ts';
import OfferStepper from './elms/OfferStepper';

const BUTTON_TEXT = 'Оценить другое авто';
const TITLE = 'Хотите получить предложение по другому автомобилю?';

const OfferPage = function () {
  const [showAccordion, setShowAccordion] = useState(false);

  const goToNextStep = useCallback(() => {
    setShowAccordion(true);
  }, []);

  return (
    <div className={cn(pageWrapper, !showAccordion && headerFirstStepWrapper)}>
      <OfferPageHeader handleClick={goToNextStep} />
      {showAccordion && (
        <div className={mainContainer}>
          <div className={page}>
            <div className={mainContent}>
              <OfferStepper />
            </div>
            <div className={aside}>
              <Advantages />
            </div>
          </div>
          <div className={pageFooter}>
            <Typography type="main" color={globalThemeColorVars.fontsQuaternary} align="inherit">
              {TITLE}
            </Typography>
            <WithButton variant="outlined" className={button} text={BUTTON_TEXT} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferPage;
