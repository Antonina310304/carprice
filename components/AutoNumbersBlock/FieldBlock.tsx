import regNumberValidate from '@validateRules/regNumberValidate';
import vinRules from '@validateRules/vinRules';
import axios from 'axios';

import { NextPage } from 'next';
import {
  memo, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BUTTON_TEXT } from '@components/AutoNumbersBlock/constants';
import RegNumberField from '@components/RegNumberField';
import VinField from '@components/VinField';

import ButtonSubmit from '@primitives/ButtonSubmit';

import { changeRegNumber, changeVin } from '@store/carSlice';
import { loadState } from '@store/localStorage';
import { IState } from '@store/types';

import fields from '@constants/fields';

import getStaticProps from '@utils/getStaticProps';

const VIN = 'VIN';

interface IFieldBlock {
  activeNumber: 'STATE_NUMBER' | 'VIN';
}

const FieldBlock: NextPage<IFieldBlock> = function ({ activeNumber }) {
  const [regNumber, setRegNumber] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();

  const vin = useSelector((state: IState) => state.carData.vin);

  const vinState = useMemo(() => vinRules(vin), [vin]);
  const numberState = useMemo(() => regNumberValidate(regNumber), [regNumber]);

  useEffect(() => {
    const localStorageData = loadState();
    if (!localStorageData) return;
    const number = localStorageData?.carData?.regNumber;
    if (!number) return;
    setRegNumber(number);
  }, []);

  const isVinChecked = useMemo(() => activeNumber === VIN, [activeNumber]);

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
      setSubmitting(true);
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

      async function load() {
        axios
          .post(papiHost, { params })
          .then((response) => {
            setSubmitting(false);
            const { data } = response;
            if (data.error === 'true') {
              // setErrors({ valid: false, errorText: data.errorText });
            }
            if (data.error === 'false') {
              const { carDetail, catalogs } = data.data;
              // dispatch(fetchCarDetail(carDetail));
              // dispatch(fetchData(catalogs));
            }
          })
          .catch(() => {
            // setErrors({ valid: false, errorText: SERVER_ERROR_TEXT });
            setSubmitting(false);
          });
      }
      load();
    },
    [isVinChecked, regNumber, vin],
  );

  return (
    <form onSubmit={onSubmit}>
      {!isVinChecked && (
        <RegNumberField
          defaultTouched={!!regNumber}
          value={regNumber}
          name={fields.REG_NUMBER}
          onChange={onChange}
          valid={numberState.valid}
          errorText={numberState.errorText}
        />
      )}

      {isVinChecked && (
        <VinField
          value={vin}
          name={fields.VIN}
          onChange={onChange}
          valid={vinState.valid}
          errorText={vinState.errorText}
        />
      )}

      <ButtonSubmit
        buttonText={BUTTON_TEXT}
        disabled={isVinChecked ? !vinState.valid : !numberState.valid}
        submitting={submitting}
      />
    </form>
  );
};

export default memo(FieldBlock);
