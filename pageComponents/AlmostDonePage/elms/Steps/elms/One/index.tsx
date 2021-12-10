import { NextPage } from 'next';
import React, { useCallback } from 'react';

import WithButton from '@primitives/WithButton';

import { BUTTON_TEXT } from '../../constants';

interface IOne {
  handleNext: () => void;
}

const One: NextPage<IOne> = ({ handleNext }) => {
  const handleClick = useCallback(() => {
    handleNext();
  }, [handleNext]);

  return (
    <div>
      первый шаг
      <WithButton text={BUTTON_TEXT} onClick={handleClick} />
    </div>
  );
};

export default One;
