import { NextPage } from 'next';
import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BlockSelectSalon from '@pages/OfferPage/elms/BlockSelectSalon';
import { MeetingList } from '@pages/OfferPage/elms/Meeting/data';
import Remote from '@pages/OfferPage/elms/Remote';

import WithFormControlLabel from '@primitives/WithFormControlLabel';
import WithRadioGroupColumn, { ILabel } from '@primitives/WithRadioGroupColumn';

import { fetchOffices } from '@store/catalogsSlice';
import { IState } from '@store/types';
import { changeMeetingType } from '@store/userDataSlice';

import { Appointment } from '@constants/fieldsValues';

import { wrapper } from './style.css';

const MeetingListContent: Record<Appointment, any> = {
  [Appointment.REMOTE]: <Remote />,
  [Appointment.LOCATION]: <BlockSelectSalon />,
};

interface IMeeting {
  isCurrentStep: boolean;
}

const Meeting: NextPage<IMeeting> = ({ isCurrentStep }) => {
  const dispatch = useDispatch();
  const meetingType = useSelector((state: IState) => state.userData.meetingType);

  const handleChange = useCallback(
    ({ target: { value } }) => {
      dispatch(changeMeetingType(value));
    },
    [dispatch]
  );

  return (
    <WithRadioGroupColumn
      value={meetingType}
      name="meetingType"
      handleChange={handleChange}
      list={MeetingList}
      label={({ title, subTitle, key }: ILabel) => (
        <WithFormControlLabel className={wrapper} title={title} subTitle={subTitle} value={key} />
      )}
      content={({ key }: { key: Appointment }) => MeetingListContent[key]}
    />
  );
};

export default memo(Meeting);
