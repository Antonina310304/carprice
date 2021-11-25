import cn from 'classnames';

import type { NextPage } from 'next';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Icon from '@primitives/Icon';

import { IState } from '@store/types';

import { wrapper, selectedRegion, iconWrapper, regionIcon, locationIcon } from './style.css';

interface IRegion {
  className?: string;
  openRegionModal: (arg: boolean) => void;
}

const Region: NextPage<IRegion> = ({ className, openRegionModal }) => {
  const activeRegion = useSelector((state: IState) => {
    return state.region.activeRegion;
  });

  const handleClick = useCallback(() => {
    openRegionModal(true);
  }, [openRegionModal]);

  return (
    <div className={cn(className, wrapper)} onClick={handleClick}>
      <i className={cn(regionIcon, locationIcon)}>
        <Icon className={regionIcon} icon={'region'} width={14} height={18} />
      </i>
      <p className={selectedRegion}>{activeRegion.name}</p>
      <i className={iconWrapper}>
        <Icon className={regionIcon} icon={'arrow'} width={12} height={6} />
      </i>
    </div>
  );
};

export default memo(Region);
