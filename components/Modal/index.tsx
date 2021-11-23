import { NextPage } from 'next';

import { Modal as MaterialModal } from '@mui/material';

import { wrapper } from './style.css';

interface IModal {
  open: boolean;
  handleClose: () => void;
}

const Modal: NextPage<IModal> = ({ open, handleClose, children }) => {
  return (
    <MaterialModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={wrapper}>{children}</div>
    </MaterialModal>
  );
};

export default Modal;
