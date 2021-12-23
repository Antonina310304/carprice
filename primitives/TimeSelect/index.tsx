import { NextPage } from 'next';
import React, {
  memo, useCallback, useEffect, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithSelect from '@primitives/WithSelect';

import { fetchOffices } from '@store/catalogsSlice';
import { IState } from '@store/types';

import { loadingStatus } from '@constants/loadingStatus';
import { changeTime } from '@store/userDataSlice';
import SelectItem from './SelectItem';

interface ITimeSelect {
  className?: string;
  name?: string;
}

const TimeSelect: NextPage<ITimeSelect> = ({ className, name = 'date' }) => {
  const dispatch = useDispatch();

  const timeListMeeting = useSelector((state: IState) => state.catalogs.timeListMeeting);

  const statusTimeListMeeting = useSelector((state: IState) => state.catalogs.statusOfficeListMeeting);
  const date = useSelector((state: IState) => state.userData.meeting.date);
  const time = useSelector((state: IState) => state.userData.meeting.time);

  const timeList = useMemo(
    () => timeListMeeting.map((timeListItem: any) => ({
      value: timeListItem.start_time, text: timeListItem.start_time, code: timeListItem.load, codeText: timeListItem.dict.text,
    })),
    [timeListMeeting],
  );

  useEffect(() => {
    dispatch(fetchOffices());
  }, [dispatch]);

  const handleChange = useCallback(({ target: { value } }) => {
    dispatch(changeTime(value));
  }, []);

  const disabled = useMemo(
    () => statusTimeListMeeting !== loadingStatus.RESOLVED || !date,
    [date, statusTimeListMeeting],
  );

  return (
    <WithSelect
      name={name}
      style={{ padding: 0 }}
      className={className}
      handleChange={handleChange}
      currValue={time}
      disabled={disabled}
      menuItemList={timeList}
      selectItem={(item) => <SelectItem item={item} />}
      placeholder="Время"
      isLoading={statusTimeListMeeting === loadingStatus.LOADING}
    />
  );
};

export default memo(TimeSelect);
