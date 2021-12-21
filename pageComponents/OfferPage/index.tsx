import cn from 'classnames';

import React, { useCallback, useState } from 'react';

import CarDetail from '@pages/OfferPage/elms/CarDetail';
import OfferPageHeader from '@pages/OfferPage/elms/OfferPageHeader';
import Advantages from '@pages/OfferPage/elms/advantages';

import Stepper from '@primitives/Stepper';
import Typography from '@primitives/Typography';
import WithButton from '@primitives/WithButton';

import Meeting from './elms/Meeting';
import Payment from './elms/Payment';
import UserContacts from './elms/UserContacts';

import { aside, button, headerFirstStepWrapper, mainContent, page, pageFooter, pageWrapper } from './style.css';

import { mainContainer } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

type TypeStep = 'carDetail' | 'userContacts' | 'payment' | 'meeting';

const STEPS: Record<TypeStep, any> = {
  carDetail: {
    title: 'Моментальное предложение',
    subtitle: 'Предложение зафиксировано!',
  },
  userContacts: {
    title: 'Контактные данные',
    subtitle: 'Оставьте ваши данные',
  },
  payment: {
    title: 'Оплата',
    subtitle: 'Выберите подходящий вам способ оплаты',
  },
  meeting: {
    title: 'Забронируйте встречу',
    subtitle: 'Выберите дату и времени, когда мы сможем забрать вашу машину',
  },
};

const stepsComponents: Record<TypeStep, any> = {
  carDetail: CarDetail,
  userContacts: UserContacts,
  payment: Payment,
  meeting: Meeting,
};

const stepKeys = Object.keys(STEPS);

const OfferPage = () => {
  const [accordionStep, setAccordionStep] = useState(1);
  const [showAccordion, setShowAccordion] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = useCallback(() => {
    setShowAccordion(true);
  }, []);

  const onChangeAccordionStep = useCallback((item) => {
    setAccordionStep(item);
  }, []);

  const onChangeCurrentStep = useCallback((stepIndex) => {
    setCurrentStep(stepIndex);
  }, []);

  return (
    <div className={cn(pageWrapper, !showAccordion && headerFirstStepWrapper)}>
      <OfferPageHeader handleClick={goToNextStep} />
      {showAccordion && (
        <div className={mainContainer}>
          <div className={page}>
            <div className={mainContent}>
              <Stepper steps={Object.values(STEPS)} activeStep={accordionStep}>
                {(idx: number) => {
                  const componentKey = stepKeys[idx];
                  const Component = stepsComponents[componentKey as TypeStep];
                  return (
                    <Component
                      toBackStep={() => setAccordionStep(idx - 1)}
                      toNextStep={() => onChangeAccordionStep(idx + 1)}
                      isCurrentStep={accordionStep === currentStep}
                      changeCurrentStep={() => onChangeCurrentStep(idx)}
                      isActive={accordionStep === idx}
                    />
                  );
                }}
              </Stepper>
            </div>
            <div className={aside}>
              <Advantages />
            </div>
          </div>
          <div className={pageFooter}>
            <Typography type="main" color={globalThemeColorVars.fontsQuaternary} align="inherit">
              Хотите получить предложение по другому автомобилю?
            </Typography>

            <WithButton variant="outlined" className={button} text="Оценить другое авто" />
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferPage;
