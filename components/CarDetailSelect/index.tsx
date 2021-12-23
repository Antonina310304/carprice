import { NextPage } from 'next';
import { memo, useCallback, useEffect } from 'react';
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

const CarDetailSelect: NextPage<ICarDetailSelect> = function ({ classNameWrapper }) {
  const dispatch = useDispatch();

  const { brandId, yearId, modelId } = useSelector((state: IState) => state.carData.carDetail);

  /* нужно только при первой отрисовке */
  useEffect(() => {
    if (yearId !== 0 && !!brandId) {
      if (brandId) {
        dispatch(fetchYears(brandId));
        dispatch(changeStatusModel(''));
      }
    }
    /*  eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  /* нужно только при первой отрисовке */
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
    [dispatch],
  );

  const handleChangeYear = useCallback(
    (selectedYear: number) => {
      dispatch(changeYear(selectedYear));
      dispatch(fetchModels({ yearId: selectedYear, brandId }));
    },
    [brandId, dispatch],
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
