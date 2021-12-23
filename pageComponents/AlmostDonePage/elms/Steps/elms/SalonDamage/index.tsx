import { omit } from 'ramda';

import { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CheckBoxGroup from '@primitives/CheckBoxGroup';
import TextArea from '@primitives/TextArea';

import { IState, TypeSalonDamage } from '@store/types';
import { updateSalonDamage } from '@store/userDataSlice';

import { SalonDamageFields } from '@constants/fields';

import { row, twoColumn } from '@styles/baseStyle/baseStyle.css';
import { fieldMap, descriptionTitle, placeholder } from './data';

const noSalonDamage = SalonDamageFields.NO_SALON_DAMAGE;
const salonDescription = SalonDamageFields.SALON_DESCRIPTION;
const SalonDamage = function () {
  const dispatch = useDispatch();

  const salonDamage = useSelector((state: IState) => state.userData.salonDamage);

  const disabled = useMemo(
    () => ({
      finishButtonDisabled: Object.values(omit([noSalonDamage, salonDescription], salonDamage)).some((value) => value),
      disabledAll: salonDamage[noSalonDamage],
    }),
    [salonDamage],
  );

  const handleChange = useCallback(
    ({ target: { name, checked } }: any) => {
      dispatch(updateSalonDamage({ name, value: checked }));
    },
    [dispatch],
  );

  const handleChangeTextArea = useCallback(
    ({ target }) => {
      dispatch(updateSalonDamage(target));
    },
    [dispatch],
  );

  return (
    <div className={row}>
      {Object.entries(fieldMap).map(([key, value]) => (
        <CheckBoxGroup
          key={key}
          disabled={key === noSalonDamage ? disabled.finishButtonDisabled : disabled.disabledAll}
          onChange={handleChange}
          checked={salonDamage[key as TypeSalonDamage]}
          className={twoColumn}
          name={key}
          label={value.title}
          text={value.subtitle}
        />
      ))}
      {disabled.finishButtonDisabled && (
        <TextArea
          name={salonDescription}
          onChange={handleChangeTextArea}
          defaultValue={salonDamage[salonDescription] as string}
          title={descriptionTitle}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default memo(SalonDamage);
