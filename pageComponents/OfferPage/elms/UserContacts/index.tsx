import cn from 'classnames';

import { NextPage } from 'next';
import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { IMaskInput } from 'react-imask';
import { useSelector } from 'react-redux';

import Typography from '@primitives/Typography';
import { typographyVariants } from '@primitives/Typography/css/index.css';
import WithAccordion from '@primitives/WithAccordion';

import { IState } from '@store/types';

import { userContactsFields } from '@constants/fields';

// import phoneValidate from '@validateRules/phoneValidate';
import contactsBlockValidate from '@validateRules/contactsBlockValidate';
import FieldsList from './FieldsList';

// eslint-disable-next-line import/extensions
import { accordionTitle } from '../CarDetail/style.css.ts';
// eslint-disable-next-line import/extensions
import { input, wrapper } from './style.css.ts';

interface IAccordionUserContact {
  toBackStep: () => void;
  toNextStep: () => void;
  isActive: boolean;
}
const UserContacts: NextPage<IAccordionUserContact> = function ({ toNextStep, isActive }) {
  const [expanded, setExpanded] = useState(isActive);
  const [dirty, setDirty] = useState(false);
  const userContacts = useSelector((state: IState) => state.userData.userContacts);

  // только при первом рендере компонента
  useEffect(() => {
    const isValid = contactsBlockValidate({
      phone: userContacts[userContactsFields.USER_PHONE] as number,
      name: userContactsFields.USER_NAME,
    });

    if (isValid) {
      setDirty(true);
    }
  }, []);

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
          header={(
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
          )}
        >
          <FieldsList onClick={onSaveChanges} />
        </WithAccordion>
      )}
    </>
  );
};

export default memo(UserContacts);
