import { NextPage } from 'next';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithSelect from '@primitives/WithSelect';

import { changeBrand } from '@store/carSlice';
import { fetchBrand } from '@store/catalogsSlice';
import { IState } from '@store/types';

import { loadingStatus } from '@constants/loadingStatus';

interface IBrand {
  className?: string;
  handleChange: (arg: string) => void;
}
const BRAND_TYPE = 0;
const Brand: NextPage<IBrand> = ({ className, handleChange }) => {
  const dispatch = useDispatch();

  const { brandId } = useSelector((state: IState) => {
    return state.carData.carDetail;
  });

  useEffect(() => {
    dispatch(fetchBrand(BRAND_TYPE));
  }, [dispatch]);

  const { brands, statusBrand } = useSelector((state: IState) => {
    return state.catalogs;
  });

  const disabled = useMemo(() => statusBrand !== loadingStatus.RESOLVED, [statusBrand]);

  const handleChangeBrand = useCallback(
    ({ target: { value } }) => {
      dispatch(changeBrand(value));
      handleChange(value);
    },
    [dispatch, handleChange]
  );

  return (
    <WithSelect
      name={'brand'}
      style={{ padding: 0 }}
      className={className}
      handleChange={handleChangeBrand}
      currValue={brandId}
      disabled={disabled}
      menuItemList={brands}
      placeholder={'Марка авто'}
      isLoading={statusBrand === loadingStatus.LOADING}
    />
  );
};

export default memo(Brand);
