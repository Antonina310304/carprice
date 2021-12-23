import { NextPage } from 'next';
import { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithSelect from '@primitives/WithSelect';

import { changeYear } from '@store/carSlice';
import { IState } from '@store/types';

import loadingStatus from '@constants/loadingStatus';

interface IYear {
  handleChange: (arg: number) => void;
  className?: string;
}

const Year: NextPage<IYear> = function ({ className, handleChange }) {
  const dispatch = useDispatch();

  const { yearId } = useSelector((state: IState) => state.carData.carDetail);

  const { years, statusYears } = useSelector((state: IState) => state.catalogs);

  const disabled = useMemo(() => statusYears !== 'resolved', [statusYears]);

  const handleChangeYear = useCallback(
    ({ target: { value } }) => {
      dispatch(changeYear(value as number));
      handleChange(value);
    },
    [dispatch, handleChange],
  );

  return (
    <WithSelect
      name="year"
      className={className}
      handleChange={handleChangeYear}
      currValue={yearId === 0 ? null : yearId}
      disabled={disabled}
      menuItemList={years}
      placeholder="Год выпуска"
      isLoading={statusYears === loadingStatus.LOADING}
    />
  );
};

export default memo(Year);
