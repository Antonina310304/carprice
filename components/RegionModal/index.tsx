import type { NextPage } from 'next';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Modal from '@components/Modal';

import Icon from '@primitives/Icon';
import RegionList from '@primitives/RegionList';
import Typography from '@primitives/Typography';

import { IState } from '@store/types';

import {
  locationIcon,
  selectedRegion,
  regionWrapper,
  header,
  titleCity,
  wrapper,
  closeButton,
  modal,
} from './style.css';
import { inner, listWrapper } from './style.css';

interface IRegionModal {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const RegionModal: NextPage<IRegionModal> = ({ isOpen, setIsOpen }) => {
  const activeRegion = useSelector((state: IState) => {
    return state.region.activeRegion;
  });

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <Modal className={modal} open={isOpen} handleClose={handleClose}>
      <>
        <div className={header}>
          <Typography type={'subTitle'} styles={{ margin: '0 0 16px' }}>
            Выберите ваш город
          </Typography>
          <div className={wrapper}>
            <Typography type={'info'} className={titleCity} as={'span'}>
              Текущий город:{' '}
            </Typography>
            <div className={regionWrapper}>
              <i className={locationIcon}>
                <Icon icon={'region'} width={14} height={18} />
              </i>
              <Typography className={selectedRegion} type={'base'} as={'span'}>
                {activeRegion.name}
              </Typography>
            </div>
          </div>
        </div>
        <div className={listWrapper}>
          <RegionList cb={handleClose} />
        </div>
      </>
    </Modal>
  );
};

export default memo(RegionModal);
