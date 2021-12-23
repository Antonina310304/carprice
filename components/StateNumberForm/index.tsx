import axios from 'axios';

import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useDispatch } from 'react-redux';

import { BUTTON_TEXT, SERVER_ERROR_TEXT } from '@components/AutoNumbersBlock/constants';
import { blockWrapper } from '@components/AutoNumbersBlock/style.css';

import ButtonSubmit from '@primitives/ButtonSubmit';
import TextMaskCustom from '@primitives/TextMaskCustom';
import WithTextField from '@primitives/WithTextField';

import useStateNumber from '@hooks/useStateNumber';

import { changeCarData, changeRegNumber, fetchCarDetail } from '@store/carSlice';
import { fetchData } from '@store/catalogsSlice';
import { loadState } from '@store/localStorage';

const KEY = 'regNumber';
const definitions = { '#': /[а-яА-Я]/ };

const StateNumberForm = function () {
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const {
    value, touched, valid, errorText, handleChange, onBlur, setErrors, setValue,
  } = useStateNumber('');

  useEffect(() => {
    const localStorageData = loadState();
    if (!localStorageData) return;
    const data = localStorageData?.carData;

    if (!data[KEY]) return;
    setValue(data[KEY]);
  }, [setValue]);

  const handleChangeVin = useCallback(
    (e: any) => {
      const newValue = e.target.value;

      dispatch(changeRegNumber(newValue));
      handleChange(e);
    },
    [dispatch, handleChange],
  );

  const onSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      setSubmitting(true);

      async function load() {
        axios
          .get(`http://localhost:4200/number?number=${value}`)
          .then((response) => {
            setSubmitting(false);
            const { data } = response;
            if (data.error === 'true') {
              setErrors({ valid: false, errorText: data.errorText });
            }
            if (data.error === 'false') {
              const { carDetail, catalogs } = data.data;
              dispatch(fetchCarDetail(carDetail));
              dispatch(fetchData(catalogs));
            }
          })
          .catch(() => {
            setErrors({ valid: false, errorText: SERVER_ERROR_TEXT });
            setSubmitting(false);
          });
      }
      load();
    },
    [dispatch, setErrors, value],
  );

  return (
    <form onSubmit={onSubmit}>
      <WithTextField
        className={blockWrapper}
        inputProps={{ mask: '#000## 000', definitions }}
        inputComponent={TextMaskCustom}
        success={valid && touched}
        error={!valid && touched}
        errorText={(touched && !valid && errorText) || ''}
        name={KEY}
        value={value}
        onChange={handleChangeVin}
        handleBlur={onBlur}
        placeholder="X000XX 000"
      />
      <ButtonSubmit buttonText={BUTTON_TEXT} disabled={!valid || submitting} submitting={submitting} />
    </form>
  );
};

export default memo(StateNumberForm);
