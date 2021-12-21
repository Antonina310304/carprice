import cn from 'classnames';

import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { buttonWrapper } from '@pages/OfferPage/style.css';

import CitySelect from '@primitives/CitySelect';
import WithButton from '@primitives/WithButton';
import WithSelect from '@primitives/WithSelect';

import { updateQuestionsStepOne } from '@store/userDataSlice';

import { wrapper } from './style.css';

import { row, twoColumn } from '@styles/baseStyle/baseStyle.css';

const BUTTON_TEXT = 'Отправить данные';

const BlockSelectSalon = () => {
  const dispatch = useDispatch();
  const handleChange = useCallback(
    (e: any) => {
      const { name, value: val } = e.target;
      dispatch(updateQuestionsStepOne({ name, value: val }));
    },
    [dispatch]
  );
  return (
    <>
      <div className={wrapper}>
        <CitySelect name="city" handleChange={handleChange} />
        <WithSelect
          name="office"
          style={{ padding: 0 }}
          className="className"
          handleChange={() => {}}
          currValue=""
          disabled={false}
          menuItemList={[]}
          placeholder="Офис"
          isLoading={false}
        />
        <div className={row}>
          <div className={twoColumn}>
            <WithSelect
              name="date"
              style={{ padding: 0 }}
              handleChange={() => {}}
              currValue=""
              disabled={false}
              menuItemList={[]}
              placeholder="Дата"
              isLoading={false}
            />
          </div>
          <div className={twoColumn}>
            <WithSelect
              name="time"
              style={{ padding: 0 }}
              handleChange={() => {}}
              currValue=""
              disabled={false}
              menuItemList={[]}
              placeholder="Время"
              isLoading={false}
            />
          </div>
        </div>
      </div>
      <WithButton text={BUTTON_TEXT} className={cn(twoColumn, buttonWrapper)} />
    </>
  );
};

export default memo(BlockSelectSalon);
