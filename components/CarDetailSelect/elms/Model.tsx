import { NextPage } from 'next';
import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithSelect from '@primitives/WithSelect';

import { changeModel } from '@store/carSlice';
import { IState } from '@store/types';

import { loadingStatus } from '@constants/loadingStatus';

interface IModel {
  className?: string;
}

const Model: NextPage<IModel> = ({ className }) => {
  const dispatch = useDispatch();
  const { modelId } = useSelector((state: IState) => {
    return state.carData.carDetail;
  });

  const { statusModel, models } = useSelector((state: IState) => {
    return state.catalogs;
  });

  const disabled = useMemo(() => statusModel !== loadingStatus.RESOLVED, [statusModel]);

  const handleChangeYear = useCallback(
    ({ target: { value } }) => {
      dispatch(changeModel(value));
    },
    [dispatch]
  );

  return (
    <WithSelect
      name={'model'}
      className={className}
      handleChange={handleChangeYear}
      currValue={modelId}
      disabled={disabled}
      menuItemList={models}
      placeholder={'Модель'}
      isLoading={statusModel === loadingStatus.LOADING}
    />
  );
};

export default memo(Model);
