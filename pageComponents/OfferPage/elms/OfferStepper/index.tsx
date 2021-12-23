import React, {
  memo, useCallback, useMemo, useState,
} from 'react';
import Stepper from '@primitives/Stepper';
import CarDetail from '@pages/OfferPage/elms/CarDetail';
import UserContacts from '@pages/OfferPage/elms/UserContacts';
import Payment from '@pages/OfferPage/elms/Payment';
import Meeting from '@pages/OfferPage/elms/Meeting';
import { useSelector } from 'react-redux';
import { IState } from '@store/types';
import contactsBlockValidate from '@validateRules/contactsBlockValidate';
import { userContactsFields } from '@constants/fields';

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

const getOfferStep = ({ paymentType, name, phone }: { paymentType: string, name: string, phone: number }) => {
  let step = 1;
  const isValid = contactsBlockValidate({
    phone,
    name,
  });
  if (paymentType) {
    step = 3;
  } else if (isValid) {
    step = 2;
  }
  return step;
};

const OfferStepper = () => {
  const name = useSelector((state: IState) => state.userData.userContacts.userName);
  const phone = useSelector((state: IState) => state.userData.userContacts.userPhone);
  const paymentType = useSelector((state: IState) => state.userData.paymentType);

  const [accordionStep, setAccordionStep] = useState(getOfferStep({ name, paymentType, phone }));

  // нужно для закрытия аккордеона при изменеии какого-либо из шагов, когда все шаги уже раскрыты
  const [currentStep, setCurrentStep] = useState(1);

  const onChangeAccordionStep = useCallback((item) => {
    setAccordionStep(item);
  }, []);

  const onChangeCurrentStep = useCallback((stepIndex) => {
    setCurrentStep(stepIndex);
  }, []);

  return (
    (
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
    )
  );
};

export default memo(OfferStepper);
