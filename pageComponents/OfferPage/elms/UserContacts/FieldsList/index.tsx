import emptyRules from '@validateRules/emptyRules';
import phoneValidate from '@validateRules/phoneValidate';

import { NextPage } from 'next';
import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextMaskCustom from '@primitives/TextMaskCustom';
import WithButton from '@primitives/WithButton';
import WithTextField from '@primitives/WithTextField';

import { IState } from '@store/types';
import { changeUserContacts } from '@store/userDataSlice';

import { userContactsFields } from '@constants/fields';

import { row, twoColumn } from '@styles/baseStyle/baseStyle.css';

const name = userContactsFields.USER_NAME;
const phone = userContactsFields.USER_PHONE;

const definitions = { '#': /[1-9]/ };
const MASK = '+7(000) 000-00-00';
const PLACEHOLDER_PHONE = 'Мобильный телефон';

const MASK_NAME = /^[а-яА-ЯёЁ0-9\s]+$/;
const PLACEHOLDER_NAME = 'Имя';

const BUTTON_TEXT = 'Продолжить';

interface IUserContacts {
  onClick: () => void;
}

const FieldsList: NextPage<IUserContacts> = ({ onClick }) => {
  const dispatch = useDispatch();
  const userContacts = useSelector((state: IState) => state.userData.userContacts);

  const stateName = useMemo(() => emptyRules(userContacts[name]), [userContacts[name]]);

  const statePhone = useMemo(() => phoneValidate(userContacts[phone] as number), [userContacts[phone]]);

  const isValid = useMemo(
    () => [stateName.valid, statePhone.valid].every((value) => value),
    [stateName.valid, statePhone.valid],
  );

  const onChange = useCallback(
    ({ target: { name: field, value } }) => {
      dispatch(changeUserContacts({ name: field, value: value.trim() }));
    },
    [dispatch],
  );

  return (
    <div className={row}>
      <WithTextField
        onChange={onChange}
        className={twoColumn}
        placeholder={PLACEHOLDER_NAME}
        name={name}
        value={userContacts[name]}
        inputComponent={TextMaskCustom}
        inputProps={{ mask: MASK_NAME }}
        error={!stateName.valid}
        success={stateName.valid}
        errorText={stateName.errorText}
      />
      <WithTextField
        className={twoColumn}
        placeholder={PLACEHOLDER_PHONE}
        inputComponent={TextMaskCustom}
        inputProps={{ mask: MASK, definitions }}
        name={phone}
        onChange={onChange}
        value={userContacts[phone]}
        error={!statePhone.valid}
        success={statePhone.valid}
        errorText={statePhone.errorText}
      />
      <WithButton variant="outlined" className={twoColumn} disabled={!isValid} text={BUTTON_TEXT} onClick={onClick} />
    </div>
  );
};

export default memo(FieldsList);
