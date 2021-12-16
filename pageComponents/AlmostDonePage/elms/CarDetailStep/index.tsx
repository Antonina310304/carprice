import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CarDetailSelect from '@components/CarDetailSelect';

import { almostDoneStepMap } from '@pages/AlmostDonePage/constants';
import CarModifications from '@pages/AlmostDonePage/elms/CarModifications';
import { carDetailInner } from '@pages/AlmostDonePage/style.css';

import WithButton from '@primitives/WithButton';

import {
  changeStatusBodyList,
  changeStatusModifications,
  fetchCarBody,
  fetchModifications,
} from '@store/catalogsSlice';
import { IState } from '@store/types';
import { changeAlmostDoneStep } from '@store/viewSlice';

import CarBody from '../CarBody';

const BUTTON_TEXT = 'Подтвердить';

const CarDetailStep = () => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const goToStep = useCallback((stepTo) => dispatch(changeAlmostDoneStep(stepTo)), [dispatch]);

  const {
    carDetail: { brandId, modelId, yearId },
    modification,
    body,
  } = useSelector((state: IState) => {
    return state.carData;
  });

  useEffect(() => {
    const validateField = [brandId, modelId, yearId, modification, body];
    const isValidField = validateField.every((item) => !!item);
    setIsValid(isValidField);
  }, [brandId, modelId, yearId, modification, body]);

  useEffect(() => {
    if (modelId !== '' && yearId !== 0) {
      //если полня модели и года заполнены сделать запрос на тип кузова
      dispatch(fetchCarBody({ modelId, yearId }));
    } else {
      dispatch(changeStatusBodyList(''));
    }
  }, [dispatch, modelId, yearId]);

  useEffect(() => {
    if (brandId !== '' && modelId !== '' && yearId !== 0) {
      // если поля бренда, модели и года заполнены сделать запрос на модификацию
      dispatch(fetchModifications({ brandId, modelId, yearId }));
    } else {
      dispatch(changeStatusModifications(''));
    }
  }, [dispatch, modelId, yearId, brandId]);

  return (
    <>
      <CarDetailSelect classNameWrapper={carDetailInner} />
      <CarBody className={carDetailInner} />
      <CarModifications className={carDetailInner} />
      <WithButton
        disabled={!isValid}
        className={carDetailInner}
        text={BUTTON_TEXT}
        onClick={() => goToStep(almostDoneStepMap.FEATURES)}
      />
    </>
  );
};

export default CarDetailStep;
