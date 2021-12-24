import regNumberValidate from '@validateRules/regNumberValidate';
import vinRules from '@validateRules/vinRules';
import axios from 'axios';

import { NextPage } from 'next';
import React, {
  memo, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BUTTON_TEXT, SERVER_ERROR_TEXT } from '@components/AutoNumbersBlock/constants';
import RegNumberField from '@components/RegNumberField';
import VinField from '@components/VinField';

import ButtonSubmit from '@primitives/ButtonSubmit';

import {
  changeRegNumber, changeVin, detectCar, saveCarDetail,
} from '@store/carSlice';
import { loadState } from '@store/localStorage';
import { IState } from '@store/types';

import fields from '@constants/fields';

import getStaticProps from '@utils/getStaticProps';
import { loadingStatus } from '@constants/loadingStatus';

const VIN = 'VIN';

interface IFieldBlock {
  activeNumber: 'STATE_NUMBER' | 'VIN';
}

const FieldBlock: NextPage<IFieldBlock> = ({ activeNumber }) => {
  const [regNumber, setRegNumber] = useState('');
  const dispatch = useDispatch();

  const {
    vin, errorDetect, statusDetect, statusRequest,
  } = useSelector((state: IState) => state.carData);
  const isVinChecked = useMemo(() => activeNumber === VIN, [activeNumber]);

  const stateField = useMemo(() => {
    // если с сервера пришла ошибка
    if (statusRequest === loadingStatus.REJECTED) {
      return {
        valid: false,
        errorText: SERVER_ERROR_TEXT,
      };
    }

    // если пришли данные с сервера
    if (errorDetect && statusDetect) {
      return {
        valid: statusDetect === 'true',
        errorText: errorDetect,
      };
    }
    if (isVinChecked) {
      return vinRules(vin);
    }

    return regNumberValidate(regNumber);
  }, [statusRequest, errorDetect, statusDetect, isVinChecked, regNumber, vin]);

  const isSubmitting = useMemo(() => statusRequest === loadingStatus.LOADING, [statusRequest]);
  useEffect(() => {
    const localStorageData = loadState();
    if (!localStorageData) return;
    const number = localStorageData?.carData?.regNumber;
    if (!number) return;
    setRegNumber(number);
  }, []);

  const onChange = useCallback(
    ({ target: { name, value } }) => {
      if (name === fields.VIN) {
        dispatch(changeVin(value));
      } else {
        dispatch(changeRegNumber(value));
        setRegNumber(value);
      }
    },
    [dispatch],
  );

  const onSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      const papiHost = getStaticProps().papiHost || '';

      let params = {};

      if (isVinChecked) {
        params = {
          vin,
        };
      } else {
        params = {
          number: regNumber,
        };
      }

      // потом заменить на post
      async function load() {
        axios
          .get(`${papiHost}createOffer`)
          .then((response) => {
            const { data } = response;
            console.log(response);
            if (!data) {
              console.log('dafsdasfd');
            }
            if (data) {
              dispatch(saveCarDetail(data));
            }
          })
          .catch(() => {
            console.log('catch');
            // setErrors({ valid: false, errorText: SERVER_ERROR_TEXT });
          });
      }
      dispatch(detectCar(params));
    },
    [dispatch, isVinChecked, regNumber, vin],
  );

  return (
    <form onSubmit={onSubmit}>
      {!isVinChecked && (
        <RegNumberField
          defaultTouched={!!regNumber}
          value={regNumber}
          name={fields.REG_NUMBER}
          onChange={onChange}
          valid={stateField.valid}
          errorText={stateField.errorText}
        />
      )}

      {isVinChecked && (
        <VinField
          value={vin}
          name={fields.VIN}
          onChange={onChange}
          valid={stateField.valid}
          errorText={stateField.errorText}
        />
      )}

      <ButtonSubmit
        buttonText={BUTTON_TEXT}
        disabled={!stateField.valid || isSubmitting}
        submitting={isSubmitting}
      />
    </form>
  );
};

export default memo(FieldBlock);
