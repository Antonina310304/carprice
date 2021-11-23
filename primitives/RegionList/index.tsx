import type { NextPage } from 'next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeRegion } from '../../store/regionSlice';

interface IRegionList {
  cb: () => any;
}

const RegionList: NextPage<IRegionList> = ({ cb }) => {
  const dispatch = useDispatch();
  const regionList = useSelector((state: any) => state.region.regions);

  const handleClick = useCallback((name) => {
    dispatch(changeRegion({ name }));
    cb();
  }, []);

  return (
    <div>
      {' '}
      {regionList.map((region: any) => (
        <li key={region.name} onClick={() => handleClick(region.name)}>
          {region.name}
        </li>
      ))}
    </div>
  );
};

export default memo(RegionList);
