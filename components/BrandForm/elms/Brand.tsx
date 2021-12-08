import { NextPage } from 'next';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { blockWrapper } from '@components/BrandForm/style.css';

import WithSelect from '@primitives/WithSelect';

import { changeBrand } from '@store/carSlice';
import { fetchBrand } from '@store/collectionCarSlice';

import { loadingStatus } from '@constants/loadingStatus';

const BRAND_TYPE = 0;
interface IBrand {
  handleChange: (arg: string) => void;
}

const Brand: NextPage<IBrand> = ({ handleChange }) => {
  const dispatch = useDispatch();

  const { brand } = useSelector((state: any) => {
    return state.carData;
  });

  const { brands, statusBrand } = useSelector((state: any) => {
    return state.collectionCar;
  });

  const disabled = useMemo(() => statusBrand !== loadingStatus.RESOLVED, [statusBrand]);

  useEffect(() => {
    dispatch(fetchBrand(BRAND_TYPE));
  }, [dispatch]);

  const handleChangeBrand = useCallback(
    ({ value }) => {
      dispatch(changeBrand(value));
      const brandId = brands.find((item: any) => item.text === value).value;
      handleChange(brandId);
    },
    [dispatch, brands, handleChange]
  );

  return (
    <WithSelect
      name={'brand'}
      style={{ padding: 0 }}
      className={blockWrapper}
      handleChange={handleChangeBrand}
      currValue={brand}
      disabled={disabled}
      menuItemList={brands}
      placeholder={'Марка авто'}
      isLoading={statusBrand === loadingStatus.LOADING}
    />
  );
};

export default memo(Brand);
