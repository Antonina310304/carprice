import type { NextPage } from 'next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@primitives/Typography';

import { changeRegion } from '@store/regionSlice';
import { IRegion, IState } from '@store/types';

import { item, list } from './style.css';

interface IRegionList {
  cb: () => void;
}

const RegionList: NextPage<IRegionList> = ({ cb }) => {
  const dispatch = useDispatch();
  const regionList = useSelector((state: IState) => state.region.regions);

  const handleClick = useCallback(
    (name) => {
      dispatch(changeRegion({ name }));
      cb();
    },
    [cb, dispatch]
  );

  return (
    <div className={list}>
      {regionList.map((region: IRegion, ind: number) => (
        <Typography
          key={region.name + ind}
          type={'base'}
          onClick={() => handleClick(region.name)}
          className={item}
          as={'p'}
        >
          {region.name}
        </Typography>
      ))}
    </div>
  );
};

export default memo(RegionList);
