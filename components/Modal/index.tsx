import cn from 'classnames';

import { NextPage } from 'next';

import { Modal as MaterialModal } from '@mui/material';

import { modalContent, mainWrapper } from './style.css';

interface IModal {
  open: boolean;
  handleClose: () => void;
  className?: string;
}

const Modal: NextPage<IModal> = ({ open, className, handleClose, children }) => {
  return (
    <MaterialModal
      className={mainWrapper}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={cn(modalContent, className)}>{children}</div>
    </MaterialModal>
  );
};

export default Modal;
