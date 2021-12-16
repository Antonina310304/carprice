import emptyRules from '@validateRules/emptyRules';

import { NextPage } from 'next';
import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithRadioGroup from '@components/WithRadioGroup';

import Caption from '@pages/AlmostDonePage/elms/Caption';

import CitySelect from '@primitives/CitySelect';
import NumberField from '@primitives/NumberField';
import RadioColor from '@primitives/RadioColor';
import WithButton from '@primitives/WithButton';
import Wrapper from '@primitives/Wrapper';

import { IState } from '@store/types';
import { updateQuestionsStepOne } from '@store/userDataSlice';

import { questionsStepOneFields, questionsStepThreeFields } from '@constants/fields';

import { BUTTON_TEXT } from '../../constants';
import TooltipContentCredit from './TooltipContentCredit';
import { creditList, wheelList } from './data';

import { row, twoColumn } from '@styles/baseStyle/baseStyle.css';

interface IOne {
  handleNext: () => void;
}
const WHEEL_TITLE = 'Руль';

const CREDIT_SUBTITLE = 'Находится ли ваша машина на данный момент в кредите?';

const pageFields = {
  [questionsStepThreeFields.WHEEL]: { value: '', validate: { minLength: 1, isEmpty: true } },
  [questionsStepThreeFields.CREDIT]: { value: '', validate: { minLength: 1, isEmpty: true } },
  [questionsStepThreeFields.MILEAGE]: { value: '', validate: { minLength: 3, isEmpty: true } },
};

export type TypeField = keyof typeof pageFields;

const color = questionsStepOneFields.COLOR;
const mileage = questionsStepOneFields.MILEAGE;
const credit = questionsStepOneFields.CREDIT;
const wheel = questionsStepOneFields.WHEEL;
const city = questionsStepOneFields.CITY;

const One: NextPage<IOne> = ({ handleNext }) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    handleNext();
  }, [handleNext]);

  const questionsStepOne = useSelector((state: IState) => state.userData.questionsStepOne);

  const mileageState = useMemo(() => {
    //
    return emptyRules(questionsStepOne[mileage]);
  }, [questionsStepOne]);

  const disabled = useMemo(() => {
    return !Object.values(questionsStepOne).every((value) => !!value);
  }, [questionsStepOne]);

  const onChange = useCallback(
    (e: any) => {
      const { name, value: val } = e.target;
      dispatch(updateQuestionsStepOne({ name: name, value: val }));
    },
    [dispatch]
  );

  return (
    <>
      <Wrapper>
        <div className={row}>
          <NumberField
            className={twoColumn}
            postfix={'км'}
            placeholder={'Пробег'}
            name={mileage}
            value={questionsStepOne[mileage]}
            onChange={onChange}
            success={mileageState.valid}
            error={!mileageState.valid}
            errorText={mileageState.errorText}
          />

          <div className={twoColumn}>
            <CitySelect handleChange={onChange} name={city} />
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <Caption title={'Цвет'} />
        <RadioColor name={color} handleChange={onChange} value={questionsStepOne[color] as string} />
      </Wrapper>
      <Wrapper>
        <WithRadioGroup
          name={wheel}
          handleChange={onChange}
          value={questionsStepOne[wheel] as string}
          list={wheelList}
          title={WHEEL_TITLE}
        />
      </Wrapper>
      <Wrapper>
        <WithRadioGroup
          name={credit}
          handleChange={onChange}
          list={creditList}
          title={<TooltipContentCredit />}
          subTitle={CREDIT_SUBTITLE}
          value={questionsStepOne[credit] as string}
        />
      </Wrapper>
      <div className={twoColumn}>
        <WithButton text={BUTTON_TEXT} disabled={disabled} onClick={handleClick} />
      </div>
    </>
  );
};

export default memo(One);
