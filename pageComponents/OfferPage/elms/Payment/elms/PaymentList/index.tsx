import { NextPage } from 'next';
import React, { memo, useEffect } from 'react';

import { PaymentList as list } from '@pages/OfferPage/elms/Payment/data';

import WithFormControlLabel from '@primitives/WithFormControlLabel';
import WithRadioGroupColumn, { ILabel } from '@primitives/WithRadioGroupColumn';

interface IPayment {
  onChange: (arg: any) => void;
  value: string;
}

const PaymentList: NextPage<IPayment> = ({ onChange, value }) => {
  useEffect(() => {
    console.log('asdfasdf');
  }, []);

  return (
    <WithRadioGroupColumn
      value={value}
      name={'paymentType'}
      handleChange={onChange}
      list={list}
      label={({ title, subTitle, key }: ILabel) => (
        <WithFormControlLabel title={title} subTitle={subTitle} value={key} />
      )}
    />
  );
};

export default memo(PaymentList);
