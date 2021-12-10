import { NextPage } from 'next';
import React, { useCallback } from 'react';

import { BUTTON_TEXT } from '@pages/AlmostDonePage/elms/Steps/constants';

import WithButton from '@primitives/WithButton';

interface ITwo {
  handleNext: () => void;
}

const Two: NextPage<ITwo> = ({ handleNext }) => {
  const handleClick = useCallback(() => {
    handleNext();
  }, [handleNext]);

  return (
    <div>
      второй шаг
      <WithButton text={BUTTON_TEXT} onClick={handleClick} />
    </div>
  );
};

export default Two;
