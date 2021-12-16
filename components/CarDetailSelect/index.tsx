import { NextPage } from 'next';
import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Brand from '@components/CarDetailSelect/elms/Brand';
import Model from '@components/CarDetailSelect/elms/Model';
import Year from '@components/CarDetailSelect/elms/Year';

import { changeYear } from '@store/carSlice';
import { changeStatusModel, fetchModels, fetchYears } from '@store/catalogsSlice';
import { IState } from '@store/types';

interface ICarDetailSelect {
  classNameWrapper?: string;
}

const CarDetailSelect: NextPage<ICarDetailSelect> = ({ classNameWrapper }) => {
  const dispatch = useDispatch();

  const { brandId, yearId, modelId } = useSelector((state: IState) => {
    return state.carData.carDetail;
  });

  /*нужно только при первой отрисовке*/
  useEffect(() => {
    if (yearId !== 0 && !!brandId) {
      if (brandId) {
        dispatch(fetchYears(brandId));
        dispatch(changeStatusModel(''));
      }
    }
  }, []);

  /*нужно только при первой отрисовке*/
  useEffect(() => {
    if (modelId !== '' && !!yearId) {
      dispatch(fetchModels({ yearId, brandId }));
    }
  }, [brandId, dispatch, modelId, yearId]);

  const handleChangeBrand = useCallback(
    (idBrand) => {
      dispatch(fetchYears(idBrand));
      dispatch(changeStatusModel(''));
    },
    [dispatch]
  );

  const handleChangeYear = useCallback(
    (selectedYear: number) => {
      dispatch(changeYear(selectedYear));
      dispatch(fetchModels({ yearId: selectedYear, brandId }));
    },
    [brandId, dispatch]
  );

  return (
    <>
      <Brand className={classNameWrapper} handleChange={handleChangeBrand} />
      <Year className={classNameWrapper} handleChange={handleChangeYear} />
      <Model className={classNameWrapper} />
    </>
  );
};

export default memo(CarDetailSelect);
