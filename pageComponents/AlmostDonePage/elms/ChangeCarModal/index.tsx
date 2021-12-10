import { NextPage } from 'next';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import CarDetailSelect from '@components/CarDetailSelect';
import Modal from '@components/Modal';
import VinInput from '@components/VinInput';

import WithButton from '@primitives/WithButton';

import { regEmail } from '@utils/regExp';

import { wrapper } from './style.css';

interface IChangeCarModal {
  showModal: boolean;
  hideModal: () => void;
}

const BUTTON_TEXT = 'Сохранить';

const ChangeCarModal: NextPage<IChangeCarModal> = ({ showModal, hideModal }) => {
  const { vin, brand, model, year } = useSelector((state: any) => state.carData);

  const isValid = () => {
    const isValidVin = vin.length > 16;
    const fields = [brand, model, year, isValidVin];
    return fields.every((item) => !!item);
  };

  console.log(vin);
  return (
    <Modal open={showModal} handleClose={hideModal}>
      <CarDetailSelect classNameWrapper={wrapper} />
      <VinInput />
      <WithButton disabled={!isValid()} onClick={hideModal} text={BUTTON_TEXT} />
    </Modal>
  );
};

export default memo(ChangeCarModal);
