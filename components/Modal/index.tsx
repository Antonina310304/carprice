import cn from 'classnames';

import { NextPage } from 'next';
import React from 'react';

import { Modal as MaterialModal } from '@mui/material';

import Icon from '@primitives/Icon';

import { modalContent, mainWrapper, inner, closeButton } from './style.css';

interface IModal {
  open: boolean;
  handleClose: () => void;
  className?: string;
  modalContentWidth?: number;
  closeIcon?: boolean;
}

const Modal: NextPage<IModal> = ({ open, className, handleClose, children, modalContentWidth, closeIcon = true }) => {
  return (
    <MaterialModal
      className={mainWrapper}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={cn(modalContent, className)} style={{ width: `${modalContentWidth}px` }}>
        <div className={inner}>
          {closeIcon && (
            <button className={closeButton} onClick={handleClose}>
              <Icon icon={'cross'} width={16} height={16} />
            </button>
          )}
          {children}
        </div>
      </div>
    </MaterialModal>
  );
};

export default Modal;
