import { NextPage } from 'next';
import { memo } from 'react';

import paymentList from '@pages/OfferPage/elms/Payment/paymentList';

import WithFormControlLabel from '@primitives/WithFormControlLabel';
import WithRadioGroupColumn, { ILabel } from '@primitives/WithRadioGroupColumn';

interface IPayment {
  onChange: (arg: any) => void;
  value: string;
}

const PaymentList: NextPage<IPayment> = function ({ onChange, value }) {
  return (
    <WithRadioGroupColumn
      value={value}
      name="paymentType"
      handleChange={onChange}
      list={paymentList}
      // eslint-disable-next-line react/no-unstable-nested-components
      label={({ title, subTitle, key }: ILabel) => (
        <WithFormControlLabel
          title={title}
          subTitle={subTitle}
          value={key}
        />
      )}
    />
  );
};

export default memo(PaymentList);
