import { NextPage } from 'next';
import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { blockWrapper } from '@components/BrandForm/style.css';

import WithSelect from '@primitives/WithSelect';

import { changeCarData } from '@store/carSlice';

import { loadingStatus } from '@constants/loadingStatus';

interface IYear {
  handleChange: (arg: number) => void;
}

const Year: NextPage<IYear> = ({ handleChange }) => {
  const dispatch = useDispatch();

  const { year } = useSelector((state: any) => {
    return state.carData;
  });

  const { years, statusYears } = useSelector((state: any) => {
    return state.collectionCar;
  });

  const disabled = useMemo(() => statusYears !== 'resolved', [statusYears]);

  const handleChangeYear = useCallback(
    ({ value }) => {
      dispatch(changeCarData({ key: 'year', value }));
      handleChange(value);
    },
    [dispatch, handleChange]
  );

  return (
    <WithSelect
      name={'year'}
      className={blockWrapper}
      handleChange={handleChangeYear}
      currValue={year}
      disabled={disabled}
      menuItemList={years}
      placeholder={'Год выпуска'}
      isLoading={statusYears === loadingStatus.LOADING}
    />
  );
};

export default memo(Year);
