import { NextPage } from 'next';
import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithSelect from '@primitives/WithSelect';

import { changeModification } from '@store/carSlice';
import { IState } from '@store/types';

import { loadingStatus } from '@constants/loadingStatus';

interface ICarModifications {
  className?: string;
}

const CarModifications: NextPage<ICarModifications> = ({ className }) => {
  const dispatch = useDispatch();
  const { modificationId } = useSelector((state: IState) => {
    return state.carData.carDetail;
  });

  const { modifications, statusModifications } = useSelector((state: IState) => {
    return state.catalogs;
  });

  const disabled = useMemo(() => statusModifications !== loadingStatus.RESOLVED, [statusModifications]);

  const handleChangeYear = useCallback(
    ({ target: { value } }) => {
      dispatch(changeModification(value));
    },
    [dispatch]
  );

  return (
    <WithSelect
      name={'model'}
      className={className}
      handleChange={handleChangeYear}
      currValue={modificationId}
      disabled={disabled}
      menuItemList={modifications}
      placeholder={'Модификация'}
      isLoading={statusModifications === loadingStatus.LOADING}
    />
  );
};

export default memo(CarModifications);
