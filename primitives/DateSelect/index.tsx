import { NextPage } from 'next';
import React, { memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithSelect from '@primitives/WithSelect';

import { fetchOffices } from '@store/catalogsSlice';
import { IState } from '@store/types';

import { loadingStatus } from '@constants/loadingStatus';

interface IDateSelect {
  className?: string;
  name?: string;
  handleChange: (arg: any) => void;
}

const DateSelect: NextPage<IDateSelect> = ({ className, name = 'date', handleChange }) => {
  const dispatch = useDispatch();

  const dateListMeeting = useSelector((state: IState) => state.catalogs.dateListMeeting);

  const statusDateListMeeting = useSelector((state: IState) => state.catalogs.statusOfficeListMeeting);
  const officeId = useSelector((state: IState) => state.userData.meeting.officeId);
  const date = useSelector((state: IState) => state.userData.meeting.date);

  const dateList = useMemo(
    () => dateListMeeting.map((dateListItem: any) => ({ value: dateListItem.date, text: dateListItem.title })),
    [dateListMeeting],
  );

  useEffect(() => {
    dispatch(fetchOffices());
  }, [dispatch]);

  const disabled = useMemo(
    () => statusDateListMeeting !== loadingStatus.RESOLVED || !officeId,
    [officeId, statusDateListMeeting],
  );

  return (
    <WithSelect
      name={name}
      style={{ padding: 0 }}
      className={className}
      handleChange={handleChange}
      currValue={date}
      disabled={disabled}
      menuItemList={dateList}
      placeholder="Дата"
      isLoading={statusDateListMeeting === loadingStatus.LOADING}
    />
  );
};

export default memo(DateSelect);
