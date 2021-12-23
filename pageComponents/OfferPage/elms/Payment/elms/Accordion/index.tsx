import { NextPage } from 'next';
import React, {
  memo, useCallback, useEffect, useState,
} from 'react';

import { accordionTitle } from '@pages/OfferPage/elms/CarDetail/style.css';
import { PaymentList } from '@pages/OfferPage/elms/Payment/data';

import Typography from '@primitives/Typography';
import WithAccordion from '@primitives/WithAccordion';
import WithFormControlLabel from '@primitives/WithFormControlLabel';
import WithRadioGroupColumn, { ILabel } from '@primitives/WithRadioGroupColumn';

import { label, wrapper, accordionDetails } from './style.css.ts';

interface IAccordionPayment {
  toBackStep: () => void;
  toNextStep: (e: any) => void;
  isActive: boolean;
  value: string;
}
const Accordion: NextPage<IAccordionPayment> = ({
  value, isActive, toNextStep, toBackStep,
}) => {
  const [expanded, setExpanded] = useState(isActive);

  useEffect(() => {
    setExpanded(isActive);
  }, [isActive]);

  const handleClickAccordionSummary = useCallback(() => {
    toBackStep();
    setExpanded((prevState) => !prevState);
  }, [toBackStep]);

  const handleChange = useCallback(
    (e) => {
      setExpanded(false);
      toNextStep(e);
    },
    [toNextStep],
  );

  return (
    <WithAccordion
      classNameDetails={accordionDetails}
      expanded={expanded}
      handleChange={handleClickAccordionSummary}
      header={(
        <Typography as="p" type="base" className={accordionTitle}>
          Перевод на банковскую карту в течение 3 банковских дней
        </Typography>
      )}
    >
      <div className={accordionDetails}>
        <WithRadioGroupColumn
          value={value}
          name="paymentType"
          handleChange={handleChange}
          list={PaymentList}
          label={({ title, subTitle, key }: ILabel) => (
            <WithFormControlLabel title={title} subTitle={subTitle} value={key} className={label} />
          )}
        />
      </div>
    </WithAccordion>
  );
};

export default memo(Accordion);
