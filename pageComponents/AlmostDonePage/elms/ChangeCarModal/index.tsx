import { NextPage } from 'next';
import {memo, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Modal from '@components/Modal';
import VinForm from '@components/VinForm';

import { almostDoneStepMap } from '@pages/AlmostDonePage/constants';

import { resetAll } from '@store/userDataSlice';
import { changeAlmostDoneStep } from '@store/viewSlice';
import { IState } from '@store/types';

interface IChangeCarModal {
  showModal: boolean;
  hideModal: () => void;
}

const ChangeCarModal: NextPage<IChangeCarModal> = ({ showModal, hideModal }) => {
  const {vin, regNumber} = useSelector((state: IState) => state.carData)
  console.log(vin, regNumber)
  const [number, setNumber] = useState('')
  const dispatch = useDispatch();

  const handleSuccess = useCallback(() => {
    dispatch(resetAll());
    dispatch(changeAlmostDoneStep(almostDoneStepMap.CONFIRM));
    hideModal();
  }, [dispatch, hideModal]);

  return (
    <Modal open={showModal} handleClose={hideModal} modalContentWidth={504} closeIcon={false}>
      <VinForm handleSuccess={handleSuccess} />
    </Modal>
  );
};

export default memo(ChangeCarModal);
