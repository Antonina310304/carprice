import axios from 'axios';

import { NextPage } from 'next';
import React, { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CarDetailSelect from '@components/CarDetailSelect';
import Year from '@components/CarDetailSelect/elms/Year';

import ButtonSubmit from '@primitives/ButtonSubmit/ButtonSubmit';
import EmailField from '@primitives/EmailField';
import Typography from '@primitives/Typography';
import WithCheckbox from '@primitives/WithCheckbox';

import { changeCarData } from '@store/carSlice';

import { regEmail } from '@utils/regExp';

import { blockWrapper } from './style.css';

import { link } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

const BUTTON_TEXT = 'Получить предложение';

const AGREEMENT = 'Я согласен на обработку персональных данных';
const TEXT_CHECKED = 'Хотите проверить цену на авто по госномеру или VIN-номеру? ';
const TEXT_LINK = 'Получить предложение о цене';

interface IBrandForm {
  onChangeForm?: (arg: any) => void;
}

const BrandForm: NextPage<IBrandForm> = ({ onChangeForm }) => {
  const dispatch = useDispatch();

  const [submitting, setSubmitting] = useState(false);

  const { brand, model, year, mail, agreement } = useSelector((state: any) => {
    return state.carData;
  });

  const isValid = () => {
    const isValidEmail = regEmail.test(mail);
    const fields = [brand, model, year, mail, agreement, isValidEmail];
    return fields.every((item) => !!item);
  };

  const handleChangeMail = useCallback(
    ({ value }) => {
      dispatch(changeCarData({ key: 'mail', value }));
    },
    [dispatch]
  );

  const handleAgreementChange = useCallback(() => {
    dispatch(changeCarData({ key: 'agreement', value: !agreement }));
  }, [agreement, dispatch]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setSubmitting(true);
      const data = {
        brand,
        model,
        year,
        mail,
      };
      axios
        .post('http://localhost:4200/data', data)
        .then(function (response) {
          alert(JSON.stringify(response.data, null, 2));
          setSubmitting(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [brand, mail, model, year]
  );
  return (
    <>
      <form className={blockWrapper}>
        <CarDetailSelect classNameWrapper={blockWrapper} />
        <EmailField name={'mail'} defaultValue={mail} onChange={handleChangeMail} />

        <ButtonSubmit
          className={blockWrapper}
          handleSubmit={handleSubmit}
          disabled={!isValid() || submitting}
          submitting={submitting}
          buttonText={BUTTON_TEXT}
        />

        <WithCheckbox label={AGREEMENT} onChange={handleAgreementChange} checked={agreement} />
      </form>
      <div onClick={onChangeForm}>
        <Typography as={'span'} className={blockWrapper} type={'min'} color={globalThemeColorVars.fontsQuaternary}>
          {TEXT_CHECKED}
        </Typography>
        <Typography as={'span'} className={link} type={'min'}>
          {TEXT_LINK}
        </Typography>
      </div>
    </>
  );
};

export default memo(BrandForm);
