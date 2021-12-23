import { omit } from 'ramda';

import { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CheckBoxGroup from '@primitives/CheckBoxGroup';
import TextArea from '@primitives/TextArea';

import { IState, TypeBodyDamage } from '@store/types';
import { updateBodyDamage } from '@store/userDataSlice';

import { BodyDamageFields } from '@constants/fields';

import { row, twoColumn } from '@styles/baseStyle/baseStyle.css';
import { descriptionTitle, placeholder, fieldMap } from './data';

const bodyDescription = BodyDamageFields.BODY_DESCRIPTION;
const noDamage = BodyDamageFields.NO_DAMAGE;

const BodyDamage = function () {
  const dispatch = useDispatch();

  const bodyDamage = useSelector((state: IState) => state.userData.bodyDamage);

  const disabled = useMemo(
    () => ({
      finishButtonDisabled: Object.values(omit([noDamage, bodyDescription], bodyDamage)).some((value) => value),
      disabledAll: bodyDamage[noDamage],
    }),
    [bodyDamage],
  );

  const handleChange = useCallback(
    ({ target: { name, checked } }: any) => {
      dispatch(updateBodyDamage({ name, value: checked }));
    },
    [dispatch],
  );

  const handleChangeTextArea = useCallback(
    ({ target }) => {
      dispatch(updateBodyDamage(target));
    },
    [dispatch],
  );

  return (
    <div className={row}>
      {Object.entries(fieldMap).map(([key, value]) => (
        <CheckBoxGroup
          key={key}
          disabled={key === noDamage ? disabled.finishButtonDisabled : disabled.disabledAll}
          onChange={handleChange}
          checked={bodyDamage[key as TypeBodyDamage]}
          className={twoColumn}
          name={key}
          label={value}
        />
      ))}
      {disabled.finishButtonDisabled && (
        <TextArea
          name={bodyDescription}
          onChange={handleChangeTextArea}
          defaultValue={bodyDamage[bodyDescription] as string}
          title={descriptionTitle}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default memo(BodyDamage);
