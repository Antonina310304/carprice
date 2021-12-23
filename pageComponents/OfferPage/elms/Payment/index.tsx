import { NextPage } from 'next';
import { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '@store/types';
import { changePaymentType } from '@store/userDataSlice';

import Accordion from './elms/Accordion';
import PaymentList from './elms/PaymentList';

interface IPayment {
  toBackStep: () => void;
  toNextStep: () => void;
  isCurrentStep: boolean;
  changeCurrentStep: () => void;
}

const Payment: NextPage<IPayment> = function ({
  changeCurrentStep, toNextStep, isCurrentStep,
}) {
  const dispatch = useDispatch();
  const paymentType = useSelector((state: IState) => state.userData.paymentType);

  const handleChange = useCallback(
    ({ target: { value } }) => {
      dispatch(changePaymentType(value));
      toNextStep();
    },
    [dispatch, toNextStep],
  );

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
