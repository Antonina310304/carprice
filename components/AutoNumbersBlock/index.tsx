import { NextPage } from 'next';
import { useCallback, useState } from 'react';

import Switch from '@primitives/Switch';
import Typography from '@primitives/Typography';

import StateNumberForm from './elms/StateNumberForm';
import VinForm from './elms/VinForm';

import { blockWrapper } from './style.css';

import { link } from '@styles/baseStyle';

const HELP_TEXT = 'Не знаете госномер или vin-номер?';
const HELP_LINK = 'Получите предварительную оценку';

const STATE_NUMBER = 'STATE_NUMBER';
const VIN = 'VIN';

const autoNumberType = {
  [STATE_NUMBER]: 'Госномер',
  [VIN]: 'vin-номер',
};
type Type = keyof typeof autoNumberType;

interface IVinForm {
  onChangeForm?: () => void;
}

const AutoNumbersBlock: NextPage<IVinForm> = ({ onChangeForm }) => {
  const [typeNumber, setTypeNumber] = useState<Type>(STATE_NUMBER);

  const changeTypeNumber = useCallback(
    (newType) => {
      setTypeNumber(newType);
    },
    [setTypeNumber]
  );

  return (
    <>
      <Switch
        className={blockWrapper}
        activeSwitch={typeNumber}
        switchNames={autoNumberType}
        changeState={changeTypeNumber}
      />
      <Typography className={blockWrapper} type={'info'}>
        {`Введите ${autoNumberType[typeNumber]} в форме ниже, чтобы получить предложение о цене`}
      </Typography>
      <div className={blockWrapper}>
        {STATE_NUMBER === typeNumber && <StateNumberForm />}
        {VIN === typeNumber && <VinForm />}
      </div>
      <div>
        <Typography as={'span'} className={blockWrapper} type={'min'}>
          {`${HELP_TEXT} `}
        </Typography>
        <Typography onClick={onChangeForm} as={'span'} className={link} type={'min'}>
          {HELP_LINK}
        </Typography>
      </div>
    </>
  );
};

export default AutoNumbersBlock;
