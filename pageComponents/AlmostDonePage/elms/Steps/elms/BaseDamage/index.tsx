import { omit } from 'ramda';

import { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CheckBoxGroup from '@primitives/CheckBoxGroup';
import TextArea from '@primitives/TextArea';

import { IState, TypeBaseDamage } from '@store/types';
import { updateBaseDamage } from '@store/userDataSlice';

import { BaseDamageFields } from '@constants/fields';

import { row, twoColumn } from '@styles/baseStyle/baseStyle.css';
import { descriptionTitle, fieldMap, placeholder } from './data';

const noBaseDamage = BaseDamageFields.NO_BASE_DAMAGE;
const baseDescription = BaseDamageFields.BASE_DESCRIPTION;

const BaseDamage = function () {
  const dispatch = useDispatch();

  const baseDamage = useSelector((state: IState) => state.userData.baseDamage);

  const disabled = useMemo(
    () => ({
      finishButtonDisabled: Object.values(omit([noBaseDamage, baseDescription], baseDamage)).some((value) => value),
      disabledAll: baseDamage[noBaseDamage],
    }),
    [baseDamage],
  );

  const handleChange = useCallback(
    ({ target: { name, checked } }: any) => {
      dispatch(updateBaseDamage({ name, value: checked }));
    },
    [dispatch],
  );

  const handleChangeTextArea = useCallback(
    ({ target }) => {
      dispatch(updateBaseDamage(target));
    },
    [dispatch],
  );

  return (
    <div className={row}>
      {Object.entries(fieldMap).map(([key, value]) => (
        <CheckBoxGroup
          key={key}
          disabled={key === noBaseDamage ? disabled.finishButtonDisabled : disabled.disabledAll}
          onChange={handleChange}
          checked={baseDamage[key as TypeBaseDamage]}
          className={twoColumn}
          name={key}
          label={value}
        />
      ))}
      {disabled.finishButtonDisabled && (
        <TextArea
          name={baseDescription}
          onChange={handleChangeTextArea}
          defaultValue={baseDamage[baseDescription] as string}
          title={descriptionTitle}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default memo(BaseDamage);
