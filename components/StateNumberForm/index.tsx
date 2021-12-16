// @ts-ignore
import EventMui from '@types/eventMui';
import axios from 'axios';

import { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { BUTTON_TEXT, SERVER_ERROR_TEXT } from '@components/AutoNumbersBlock/constants';
import { blockWrapper } from '@components/AutoNumbersBlock/style.css';

import ButtonSubmit from '@primitives/ButtonSubmit';
import TextMaskCustom from '@primitives/TextMaskCustom';
import WithTextField from '@primitives/WithTextField';

import useStateNumber from '@hooks/useStateNumber';

import { changeCarData, fetchCarDetail } from '@store/carSlice';
import { fetchData } from '@store/catalogsSlice';
import { loadState } from '@store/localStorage';

const KEY = 'number';
const definitions = { '#': /[а-яА-Я]/ };

const StateNumberForm = () => {
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const { value, touched, valid, errorText, handleChange, handleBlur, setErrors, setValue } = useStateNumber('');

  useEffect(() => {
    const localStorageData = loadState();
    if (!localStorageData) return;
    const data = localStorageData?.carData;

    if (!data[KEY]) return;
    setValue(data[KEY]);
  }, [setValue]);

  const handleChangeVin = useCallback(
    (e: EventMui) => {
      const newValue = e.target.value;

      dispatch(changeCarData({ key: KEY, value: newValue }));
      handleChange(e);
    },
    [dispatch, handleChange]
  );

  const onSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      setSubmitting(true);

      async function load() {
        axios
          .get(`http://localhost:4200/number?number=${value}`)
          .then(function (response) {
            setSubmitting(false);
            const data = response.data;
            if (data.error === 'true') {
              setErrors({ valid: false, errorText: data.errorText });
            }
            if (data.error === 'false') {
              const { carDetail, catalogs } = data.data;
              dispatch(fetchCarDetail(carDetail));
              dispatch(fetchData(catalogs));
            }
          })
          .catch(function (error) {
            setErrors({ valid: false, errorText: SERVER_ERROR_TEXT });
            setSubmitting(false);
          });
      }
      load();
    },
    [dispatch, setErrors, value]
  );

  return (
    <form onSubmit={onSubmit}>
      <WithTextField
        className={blockWrapper}
        inputProps={{ mask: '#000## 000', definitions: definitions }}
        inputComponent={TextMaskCustom}
        success={valid && touched}
        error={!valid && touched}
        errorText={(touched && !valid && errorText) || ''}
        name={KEY}
        value={value}
        onChange={handleChangeVin}
        handleBlur={handleBlur}
        placeholder={'X000XX 000'}
      />
      <ButtonSubmit buttonText={BUTTON_TEXT} disabled={!valid || submitting} submitting={submitting} />
    </form>
  );
};

export default memo(StateNumberForm);
