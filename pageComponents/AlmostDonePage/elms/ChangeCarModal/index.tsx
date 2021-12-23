import { NextPage } from 'next';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Modal from '@components/Modal';
import VinForm from '@components/VinForm';

import { almostDoneStepMap } from '@pages/AlmostDonePage/constants';

import { resetAll } from '@store/userDataSlice';
import { changeAlmostDoneStep } from '@store/viewSlice';

interface IChangeCarModal {
  showModal: boolean;
  hideModal: () => void;
}

const ChangeCarModal: NextPage<IChangeCarModal> = function ({ showModal, hideModal }) {
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
