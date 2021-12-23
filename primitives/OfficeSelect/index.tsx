import { NextPage } from 'next';
import { memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithSelect from '@primitives/WithSelect';

import { fetchOffices } from '@store/catalogsSlice';
import { IState } from '@store/types';

import loadingStatus from '@constants/loadingStatus';

interface IOfficeSelect {
  className?: string;
  name?: string;
  handleChange: (arg: any) => void;
}

const OfficeSelect: NextPage<IOfficeSelect> = function ({ className, name = 'office', handleChange }) {
  const dispatch = useDispatch();

  const officeListMeeting = useSelector((state: IState) => state.catalogs.officeListMeeting);
  const statusOfficeListMeeting = useSelector((state: IState) => state.catalogs.statusOfficeListMeeting);
  const city = useSelector((state: IState) => state.userData.questionsStepOne.city);
  const officeId = useSelector((state: IState) => state.userData.meeting.officeId);

  const officeList = useMemo(
    () => officeListMeeting.filter((office) => office.city_id === city),
    [officeListMeeting, city],
  );

  useEffect(() => {
    dispatch(fetchOffices());
  }, [dispatch]);

  const disabled = useMemo(
    () => statusOfficeListMeeting !== loadingStatus.RESOLVED || !city,
    [city, statusOfficeListMeeting],
  );

  return (
    <WithSelect
      name={name}
      style={{ padding: 0 }}
      className={className}
      handleChange={handleChange}
      currValue={officeId}
      disabled={disabled}
      menuItemList={officeList}
      placeholder="Офис"
      isLoading={statusOfficeListMeeting === loadingStatus.LOADING}
    />
  );
};

export default memo(OfficeSelect);
