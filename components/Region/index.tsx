import cn from 'classnames';

import type { NextPage } from 'next';
import React, { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { IStore } from '@components/Region/types';

import Icon from '@primitives/Icon';

import RegionList from '../../primitives/RegionList';
import Modal from '../Modal';
import { wrapper, selectedRegion, iconWrapper, toggleIcon, regionIcon, locationIcon } from './style.css';

interface IRegion {
  className?: string;
}

const Region: NextPage<IRegion> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const activeRegion = useSelector((state: IStore) => {
    return state.region.activeRegion;
  });

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <div className={cn(className, wrapper)} onClick={() => setIsOpen(true)}>
        <i className={cn(regionIcon, locationIcon)}>
          <Icon className={regionIcon} icon={'region'} width={14} height={18} />
        </i>
        <p className={selectedRegion}>{activeRegion.name}</p>
        <i className={cn(iconWrapper, toggleIcon[isOpen ? 'open' : 'close'])}>
          <Icon className={regionIcon} icon={'arrow'} width={12} height={6} />
        </i>
      </div>

      <Modal open={isOpen} handleClose={handleClose}>
        <RegionList cb={handleClose} />
      </Modal>
    </>
  );
};

export default memo(Region);
