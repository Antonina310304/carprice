import { NextPage } from 'next';
import { useCallback } from 'react';

import { BUTTON_TEXT } from '@pages/AlmostDonePage/elms/Steps/constants';
import { header } from '@pages/AlmostDonePage/elms/Steps/elms/Three/style.css';

import Typography from '@primitives/Typography';
import WithButton from '@primitives/WithButton';

import { twoColumn } from '@styles/baseStyle/baseStyle.css';

interface ITwo {
  handleNext: () => void;
}

const Two: NextPage<ITwo> = function ({ handleNext }) {
  const handleClick = useCallback(() => {
    handleNext();
  }, [handleNext]);

  return (
    <>
      <Typography as="p" type="base" className={header}>
        Чтобы сэкономить вам время, мы используем самые популярные варианты дополнительного оборудования. Если на вашей
        машине установлено дорогостоящее дополнительное оборудование, то сообщите нам об этом на этапе подтверждения
        предложения.
      </Typography>
      <div className={twoColumn}>
        <WithButton text={BUTTON_TEXT} onClick={handleClick} />
      </div>
    </>
  );
};

export default Two;
