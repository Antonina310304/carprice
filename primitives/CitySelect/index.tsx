import { NextPage } from 'next';
import React, { memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithSelect from '@primitives/WithSelect';

import { fetchCities } from '@store/catalogsSlice';
import { IState } from '@store/types';

import { loadingStatus } from '@constants/loadingStatus';

interface ICitySelect {
  className?: string;
  name?: string;
  handleChange: (arg: any) => void;
}

const CitySelect: NextPage<ICitySelect> = ({ name = 'city', className, handleChange }) => {
  const dispatch = useDispatch();

  const city = useSelector((state: IState) => state.userData.questionsStepOne.city);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const { cities, statusCities } = useSelector((state: IState) => state.catalogs);

  const disabled = useMemo(() => statusCities !== loadingStatus.RESOLVED, [statusCities]);

  return (
    <WithSelect
      name={name}
      style={{ padding: 0 }}
      className={className}
      handleChange={handleChange}
      currValue={city}
      disabled={disabled}
      menuItemList={cities}
      placeholder="Город"
      isLoading={statusCities === loadingStatus.LOADING}
    />
  );
};

export default memo(CitySelect);
