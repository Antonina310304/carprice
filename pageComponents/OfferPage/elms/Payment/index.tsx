import { NextPage } from 'next';
import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '@store/types';
import { changePaymentType } from '@store/userDataSlice';

import Accordion from './elms/Accordion';
import PaymentList from './elms/PaymentList';

interface IPayment {
  toBackStep: () => void;
  toNextStep: () => void;
  isCurrentStep: boolean;
}

const Payment: NextPage<IPayment> = ({ toBackStep, changeCurrentStep, toNextStep, isCurrentStep }) => {
  const dispatch = useDispatch();
  const paymentType = useSelector((state: IState) => state.userData.paymentType);

  const handleChange = useCallback(
    ({ target: { value } }) => {
      dispatch(changePaymentType(value));
      toNextStep();
    },
    [dispatch, toNextStep]
  );

  useEffect(() => {
    console.log('asdfasdf');
  }, []);

  return (
    <div>
      {paymentType && (
        <Accordion
          value={paymentType}
          toBackStep={changeCurrentStep}
          toNextStep={handleChange}
          isActive={isCurrentStep}
        />
      )}
      {!paymentType && <PaymentList value={paymentType} onChange={handleChange} />}
    </div>
  );
};

export default memo(Payment);
