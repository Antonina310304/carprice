import { NextPage } from 'next';
import { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithSelect from '@primitives/WithSelect';

import { changeCarBody } from '@store/carSlice';
import { IState } from '@store/types';

import loadingStatus from '@constants/loadingStatus';

interface ICarBody {
  className?: string;
}

const CarBody: NextPage<ICarBody> = function ({ className }) {
  const dispatch = useDispatch();
  const bodyId = useSelector((state: IState) => state.carData.carDetail.bodyId);

  const { statusCarBodyList, carBodyList } = useSelector((state: IState) => state.catalogs);

  const disabled = useMemo(() => statusCarBodyList !== loadingStatus.RESOLVED, [statusCarBodyList]);

  const handleChangeYear = useCallback(
    ({ target: { value } }) => {
      dispatch(changeCarBody(value));
    },
    [dispatch],
  );

  return (
    <WithSelect
      name="model"
      className={className}
      handleChange={handleChangeYear}
      currValue={bodyId}
      disabled={disabled}
      menuItemList={carBodyList}
      placeholder="Тип кузова"
      isLoading={statusCarBodyList === loadingStatus.LOADING}
    />
  );
};

export default memo(CarBody);
