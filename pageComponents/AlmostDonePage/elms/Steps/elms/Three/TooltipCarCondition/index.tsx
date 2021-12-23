import { memo } from 'react';

import TooltipHeader from '@primitives/TooltipHeader';
import WithTooltip from '@primitives/WithTooltip';

import { titles } from '../data';
import { text, wrapper } from './style.css';

const TITLE = 'Состояние автомобиля';

const TooltipCarCondition = function () {
  return (
    <>
      {titles.CAR_CONDITION}
      <WithTooltip
        className={wrapper}
        tooltipContent={(
          <>
            <TooltipHeader title={TITLE} />
            <p className={text}>
              If you currently have a loan on the vehicle you’re planning to sell or trade-in, we’ll help you through
              the steps to get it paid off. It’s okay to enter estimates for your remaining balance and monthly payment.
            </p>
            <p className={text}>
              The best option if your vehicle is fully paid for and you don’t have a monthly loan or lease payment. If
              you previously had a loan or a lease, but have already paid it off, select “neither”.
            </p>
          </>
        )}
      />
    </>
  );
};

export default memo(TooltipCarCondition);
