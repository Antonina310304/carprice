import emptyRules from '@validateRules/emptyRules';
import mailRules from '@validateRules/mailRules';
import { omit } from 'ramda';

import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithRadioGroup from '@components/WithRadioGroup';

import Caption from '@pages/AlmostDonePage/elms/Caption';
import BaseDamage from '@pages/AlmostDonePage/elms/Steps/elms/BaseDamage';
import BodyDamage from '@pages/AlmostDonePage/elms/Steps/elms/BodyDamage';
import SalonDamage from '@pages/AlmostDonePage/elms/Steps/elms/SalonDamage';
import TooltipCarCondition from '@pages/AlmostDonePage/elms/Steps/elms/Three/TooltipCarCondition';

import NumberField from '@primitives/NumberField';
import Typography from '@primitives/Typography';
import WithButton from '@primitives/WithButton';
import WithTextField from '@primitives/WithTextField';
import Wrapper from '@primitives/Wrapper';

import { IState } from '@store/types';
import { updateHasDTP, updateQuestionsStepThree } from '@store/userDataSlice';

import { questionsStepThreeFields } from '@constants/fields';

import { row, twoColumn } from '@styles/baseStyle/baseStyle.css';
import {
  additionalEquipmentList,
  carConditionList,
  isDriveableList,
  jumpsInMileageList,
  keyCountList,
  rtAList,
  usedAsTaxiList,
  smokeList,
  titles,
} from './data';
import { header } from './style.css';

const BUTTON_TEXT = 'Получить предложение';
const FINAL_TITLE = 'Ваше предложение уже готово. Укажите ваш email, мы продублируем наше предложение вам на почту. ';
const NONE = 'none';

const hasDtp = questionsStepThreeFields.HAS_DTP;
const driveable = questionsStepThreeFields.DRIVEABLE;
const repairCost = questionsStepThreeFields.REPAIR_COST;
const additionalEquipment = questionsStepThreeFields.ADDITIONAL_EQUIPMENT;
const smoke = questionsStepThreeFields.SMOKE;
const keyCount = questionsStepThreeFields.KEY_COUNT;
const usedAsTaxi = questionsStepThreeFields.USED_AS_TAXI;
const jumpsInMileage = questionsStepThreeFields.JUMPS_IN_MILEAGE;
const carCondition = questionsStepThreeFields.CAR_CONDITION;
const mail = questionsStepThreeFields.MAIL;

const Three = () => {
  const dispatch = useDispatch();

  const {
    questionsStepThree, baseDamage, bodyDamage, salonDamage,
  } = useSelector((state: IState) => state.userData);

  const onChange = useCallback(
    ({ target: { name, value } }: any) => {
      if (name === hasDtp) {
        dispatch(updateHasDTP(value));
        return;
      }
      dispatch(updateQuestionsStepThree({ name, value }));
    },
    [dispatch],
  );

  const emailState = useMemo(() => mailRules(questionsStepThree[mail] as string),
  // eslint-disable-next-line react-hooks/exhaustive-deps
    [questionsStepThree[mail]]);

  const repairCostState = useMemo(() => emptyRules(questionsStepThree[repairCost]),
  // eslint-disable-next-line react-hooks/exhaustive-deps
    [questionsStepThree[repairCost]]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dtp = useMemo(() => questionsStepThree[hasDtp], [questionsStepThree[hasDtp]]);

  const isHasDtp = useMemo(() => dtp && dtp !== NONE, [dtp]);

  // если автомобиль был в ДТП обязательные поля repairCost, driveable
  const isDtp = useMemo(() => {
    if (isHasDtp) return [dtp, questionsStepThree[repairCost], questionsStepThree[driveable]];
    return [dtp];
  }, [dtp, isHasDtp, questionsStepThree]);

  // валидация на кнопку
  const disabled = useMemo(() => {
    const isBaseDamageChecked = Object.entries(baseDamage).some(([, value]) => value);
    const isBodyDamage = Object.entries(bodyDamage).some(([, value]) => value);
    const isSalonDamage = Object.entries(salonDamage).some(([, value]) => value);
    const otherFields = Object.values(omit([hasDtp, repairCost, driveable], questionsStepThree));

    const isValid = [
      ...otherFields,
      ...isDtp,
      emailState.valid,
      isBaseDamageChecked,
      isBodyDamage,
      isSalonDamage,
    ].every((item) => !!item);

    return !isValid;
  }, [baseDamage, bodyDamage, salonDamage, questionsStepThree, isDtp, emailState.valid]);

  return (
    <>
      <Typography as="p" type="base" className={header}>
        Пожалуйста, опишите состояние своего автомобиля, ответив на вопросы ниже.
      </Typography>
      <Wrapper>
        <WithRadioGroup name={hasDtp} handleChange={onChange} value={dtp as string} list={rtAList} title={titles.RTA} />
      </Wrapper>

      {isHasDtp && (
        <>
          <Wrapper>
            <WithRadioGroup
              name={driveable}
              value={questionsStepThree[driveable] as string}
              handleChange={onChange}
              list={isDriveableList}
              title={titles.DRIVEABLE}
            />
          </Wrapper>
          <Wrapper>
            <Caption title={titles.REPAIR_COST} />
            <NumberField
              className={twoColumn}
              postfix="₽"
              placeholder="Стоимость ремонта"
              name={repairCost}
              value={questionsStepThree[repairCost] as string}
              onChange={onChange}
              success={repairCostState.valid}
              error={!repairCostState.valid}
              errorText={repairCostState.errorText}
            />
          </Wrapper>
        </>
      )}

      <Wrapper>
        <Caption title={titles.BASE_DAMAGE} />
        <BaseDamage />
      </Wrapper>

      <Wrapper>
        <Caption title={titles.BODY_DAMAGE} />
        <BodyDamage />
      </Wrapper>

      <Wrapper>
        <Caption title={titles.SALON_DAMAGE} />
        <SalonDamage />
      </Wrapper>

      <Wrapper>
        <WithRadioGroup
          name={additionalEquipment}
          handleChange={onChange}
          list={additionalEquipmentList}
          value={questionsStepThree[additionalEquipment] as string}
          title={titles.ADDITIONAL_EQUIPMENT}
        />
      </Wrapper>

      <Wrapper>
        <WithRadioGroup
          name={smoke}
          handleChange={onChange}
          list={smokeList}
          value={questionsStepThree[smoke] as string}
          title={titles.SMOKE}
        />
      </Wrapper>
      <Wrapper>
        <WithRadioGroup
          name={keyCount}
          handleChange={onChange}
          list={keyCountList}
          value={questionsStepThree[keyCount] as string}
          title={titles.KEY_COUNT}
        />
      </Wrapper>
      <Wrapper>
        <WithRadioGroup
          name={usedAsTaxi}
          handleChange={onChange}
          list={usedAsTaxiList}
          value={questionsStepThree[usedAsTaxi] as string}
          title={titles.USED_AS_TAXI}
        />
      </Wrapper>
      <Wrapper>
        <WithRadioGroup
          name={jumpsInMileage}
          handleChange={onChange}
          list={jumpsInMileageList}
          value={questionsStepThree[jumpsInMileage] as string}
          title={titles.JUMPS_IN_MILEAGE}
        />
      </Wrapper>
      <Wrapper>
        <WithRadioGroup
          name={carCondition}
          handleChange={onChange}
          value={questionsStepThree[carCondition] as string}
          list={carConditionList}
          title={<TooltipCarCondition />}
        />
      </Wrapper>
      <Caption title={FINAL_TITLE} />
      <div className={row}>
        <WithTextField
          className={twoColumn}
          success={emailState.valid}
          error={!emailState.valid}
          errorText={(!emailState.valid && emailState.errorText) || ''}
          name={mail}
          value={questionsStepThree[mail] as string}
          onChange={onChange}
          placeholder="Email"
        />

        <div className={twoColumn}>
          <WithButton text={BUTTON_TEXT} onClick={() => alert({ BUTTON_TEXT })} disabled={disabled} />
        </div>
      </div>
    </>
  );
};

export default Three;
