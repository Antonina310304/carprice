import axios from 'axios';

import { NextPage } from 'next';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CarDetailSelect from '@components/CarDetailSelect';

import ButtonSubmit from '@primitives/ButtonSubmit';
import EmailField from '@primitives/EmailField';
import Typography from '@primitives/Typography';
import WithCheckbox from '@primitives/WithCheckbox';

import { changeCarData, changeData } from '@store/carSlice';
import { IState } from '@store/types';

import { questionsStepThreeFields } from '@constants/fields';

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

  const {
    carDetail: { brandId, modelId, yearId },
    agreement,
  } = useSelector((state: IState) => {
    return state.carData;
  });

  const mail = useSelector((state: IState) => {
    return state.userData.questionsStepThree.mail;
  });

  const isValid = useMemo(() => {
    const isValidEmail = regEmail.test(mail);
    const validateFields = [brandId, modelId, yearId, mail, agreement, isValidEmail];
    return validateFields.every((item) => !!item);
  }, [agreement, brandId, mail, modelId, yearId]);

  const handleChangeMail = useCallback(
    ({ target: { value } }) => {
      dispatch(changeData({ key: questionsStepThreeFields.MAIL, value }));
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
        brandId,
        modelId,
        yearId,
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
    [brandId, mail, modelId, yearId]
  );
  return (
    <>
      <form className={blockWrapper}>
        <CarDetailSelect classNameWrapper={blockWrapper} />
        <EmailField className={blockWrapper} name={'mail'} defaultValue={mail} onChange={handleChangeMail} />

        <ButtonSubmit
          className={blockWrapper}
          handleSubmit={handleSubmit}
          disabled={!isValid || submitting}
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
