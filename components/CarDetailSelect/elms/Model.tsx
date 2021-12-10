import { NextPage } from 'next';
import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithSelect from '@primitives/WithSelect';

import { changeCarData } from '@store/carSlice';

import { loadingStatus } from '@constants/loadingStatus';

interface IModel {
  className?: string;
}

const Model: NextPage<IModel> = ({ className }) => {
  const dispatch = useDispatch();
  const { model } = useSelector((state: any) => {
    return state.carData;
  });

  const { statusModel, models } = useSelector((state: any) => {
    return state.collectionCar;
  });

  const disabled = useMemo(() => statusModel !== 'resolved', [statusModel]);

  const handleChangeYear = useCallback(
    ({ value }) => {
      dispatch(changeCarData({ key: 'model', value }));
    },
    [dispatch]
  );

  return (
    <WithSelect
      name={'model'}
      className={className}
      handleChange={handleChangeYear}
      currValue={model}
      disabled={disabled}
      menuItemList={models}
      placeholder={'Модель'}
      isLoading={statusModel === loadingStatus.LOADING}
    />
  );
};

export default memo(Model);
