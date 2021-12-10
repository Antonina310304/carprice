import { NextPage } from 'next';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Brand from '@components/CarDetailSelect/elms/Brand';
import Model from '@components/CarDetailSelect/elms/Model';
import Year from '@components/CarDetailSelect/elms/Year';

import { changeCarData } from '@store/carSlice';
import { changeStatusModel, fetchModels, fetchYears } from '@store/collectionCarSlice';

interface ICarDetailSelect {
  classNameWrapper?: string;
}

const CarDetailSelect: NextPage<ICarDetailSelect> = ({ classNameWrapper }) => {
  const dispatch = useDispatch();

  const { brand, model } = useSelector((state: any) => {
    return state.carData;
  });

  const { brands } = useSelector((state: any) => {
    return state.collectionCar;
  });

  const handleChangeBrand = useCallback(
    (brandId) => {
      dispatch(fetchYears(brandId));
      dispatch(changeCarData({ key: 'year', value: '' }));
      dispatch(changeCarData({ key: 'model', value: '' }));
      dispatch(changeStatusModel(''));
    },
    [dispatch]
  );

  const handleChangeYear = useCallback(
    (selectedYear: number) => {
      dispatch(changeCarData({ key: model, value: '' }));
      const brandId = brands.find((item: any) => item.text === brand).value as number;
      dispatch(fetchModels({ year: selectedYear, brandId }));
    },
    [brand, brands, dispatch, model]
  );

  return (
    <>
      <Brand className={classNameWrapper} handleChange={handleChangeBrand} />
      <Year className={classNameWrapper} handleChange={handleChangeYear} />
      <Model className={classNameWrapper} />
    </>
  );
};

export default CarDetailSelect;
