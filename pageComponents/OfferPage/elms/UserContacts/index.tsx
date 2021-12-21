import phoneValidate from '@validateRules/phoneValidate';
import cn from 'classnames';

import { NextPage } from 'next';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { IMaskInput } from 'react-imask';
import { useSelector } from 'react-redux';

import Typography from '@primitives/Typography';
import { typographyVariants } from '@primitives/Typography/css/index.css';
import WithAccordion from '@primitives/WithAccordion';

import { loadState } from '@store/localStorage';
import { IState } from '@store/types';
import userDataSlice from '@store/userDataSlice';

import { userContactsFields } from '@constants/fields';

import FieldsList from './elms/FieldsList';

import { accordionTitle } from '../CarDetail/style.css';
import { input, wrapper } from './style.css';

interface IAccordionUserContact {
  toBackStep: () => void;
  toNextStep: () => void;
  isActive: boolean;
}
const UserContacts: NextPage<IAccordionUserContact> = ({ toNextStep, isActive }) => {
  const [expanded, setExpanded] = useState(isActive);
  const [dirty, setDirty] = useState(false);
  const userContacts = useSelector((state: IState) => state.userData.userContacts);

  const onSaveChanges = useCallback(() => {
    setExpanded(false);
    setDirty(true);
  }, []);

  const saveAndNextStep = useCallback(() => {
    toNextStep();
    onSaveChanges();
  }, [onSaveChanges, toNextStep]);

  const handleClickAccordionSummary = useCallback(() => {
    setExpanded((prevState) => !prevState);
  }, []);

  return (
    <>
      {!dirty && <FieldsList onClick={saveAndNextStep} />}
      {dirty && (
        <WithAccordion
          expanded={expanded}
          handleChange={handleClickAccordionSummary}
          header={
            <div className={wrapper}>
              <Typography as="p" type="base" className={accordionTitle}>
                {userContacts[userContactsFields.USER_NAME]}{' '}
              </Typography>
              <IMaskInput
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                className={cn(typographyVariants.base, input)}
                mask="+7(000) 000-00-00"
                disabled
                value={userContacts[userContactsFields.USER_PHONE]}
              />
            </div>
          }
        >
          <FieldsList onClick={onSaveChanges} />
        </WithAccordion>
      )}
    </>
  );
};

export default memo(UserContacts);
