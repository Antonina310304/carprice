import { NextPage } from 'next';
import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithSelect from '@primitives/WithSelect';

import { changeCarData } from '@store/carSlice';
import { IState } from '@store/types';

import FieldsNames from '@constants/fields';
import { loadingStatus } from '@constants/loadingStatus';

interface IYear {
  handleChange: (arg: number) => void;
  className?: string;
}

const Year: NextPage<IYear> = ({ className, handleChange }) => {
  const dispatch = useDispatch();

  const { yearId } = useSelector((state: IState) => {
    return state.carData.carDetail;
  });

  const { years, statusYears } = useSelector((state: IState) => {
    return state.catalogs;
  });

  const disabled = useMemo(() => statusYears !== 'resolved', [statusYears]);

  const handleChangeYear = useCallback(
    ({ target: { value } }) => {
      console.log(value);
      dispatch(changeCarData({ key: FieldsNames.YEAR, value }));
      handleChange(value);
    },
    [dispatch, handleChange]
  );

  return (
    <WithSelect
      name={'year'}
      className={className}
      handleChange={handleChangeYear}
      currValue={yearId === 0 ? '' : String(yearId)}
      disabled={disabled}
      menuItemList={years}
      placeholder={'Год выпуска'}
      isLoading={statusYears === loadingStatus.LOADING}
    />
  );
};

export default memo(Year);
