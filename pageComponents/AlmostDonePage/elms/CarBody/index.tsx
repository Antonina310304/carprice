import { NextPage } from 'next';
import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithSelect from '@primitives/WithSelect';

import { changeCarBody } from '@store/carSlice';
import { IState } from '@store/types';

import { loadingStatus } from '@constants/loadingStatus';

interface ICarBody {
  className?: string;
}

const CarBody: NextPage<ICarBody> = ({ className }) => {
  const dispatch = useDispatch();
  const { body } = useSelector((state: IState) => {
    return state.carData;
  });

  const { statusCarBodyList, carBodyList } = useSelector((state: IState) => {
    return state.catalogs;
  });

  const disabled = useMemo(() => statusCarBodyList !== loadingStatus.RESOLVED, [statusCarBodyList]);

  const handleChangeYear = useCallback(
    ({ target: { value } }) => {
      dispatch(changeCarBody(value));
    },
    [dispatch]
  );

  return (
    <WithSelect
      name={'model'}
      className={className}
      handleChange={handleChangeYear}
      currValue={body}
      disabled={disabled}
      menuItemList={carBodyList}
      placeholder={'Тип кузова'}
      isLoading={statusCarBodyList === loadingStatus.LOADING}
    />
  );
};

export default memo(CarBody);
