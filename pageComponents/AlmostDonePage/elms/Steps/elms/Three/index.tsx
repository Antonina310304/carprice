import React from 'react';

import { BUTTON_TEXT } from '@pages/AlmostDonePage/elms/Steps/constants';

import WithButton from '@primitives/WithButton';

const Three = () => {
  return (
    <div>
      третий шаг
      <WithButton text={BUTTON_TEXT} onClick={() => alert('Получить предложение')} />
    </div>
  );
};

export default Three;
