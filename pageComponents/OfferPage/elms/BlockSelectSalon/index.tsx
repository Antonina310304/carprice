import { buttonWrapper } from '@pages/OfferPage/style.css';
import CitySelect from '@primitives/CitySelect';
import DateSelect from '@primitives/DateSelect';
import OfficeSelect from '@primitives/OfficeSelect';
import TimeSelect from '@primitives/TimeSelect';
import WithButton from '@primitives/WithButton';
import { fetchDates, fetchTimes } from '@store/catalogsSlice';
import { IState } from '@store/types';
import {
  changeDateMeeting,
  changeOffice,
  updateLocations,
} from '@store/userDataSlice';
import { row, twoColumn } from '@styles/baseStyle/baseStyle.css';
import cn from 'classnames';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/extensions
import wrapper from './style.css.ts';

const BUTTON_TEXT = 'Отправить данные';

const BlockSelectSalon = function () {
  const dispatch = useDispatch();
  const officeId = useSelector(
    (state: IState) => state.userData.meeting.officeId,
  );

  const changeCity = useCallback(
    (e: any) => {
      const { value } = e.target;
      dispatch(updateLocations(value));
    },
    [dispatch],
  );

  const handleChangeOffice = useCallback(
    (e: any) => {
      const { value } = e.target;
      dispatch(changeOffice(value));
      dispatch(fetchDates(value));
    },
    [dispatch],
  );

  const changeDate = useCallback(
    (e: any) => {
      const { value } = e.target;
      dispatch(changeDateMeeting(value));
      dispatch(fetchTimes({ branchId: officeId, date: value }));
    },
    [dispatch, officeId],
  );

  return (
    <>
      <div className={wrapper}>
        <CitySelect name="city" handleChange={changeCity} />
        <OfficeSelect name="office" handleChange={handleChangeOffice} />
        <div className={row}>
          <div className={twoColumn}>
            <DateSelect handleChange={changeDate} />
          </div>
          <div className={twoColumn}>
            <TimeSelect name="time" />
          </div>
        </div>
      </div>
      <WithButton text={BUTTON_TEXT} className={cn(twoColumn, buttonWrapper)} />
    </>
  );
};

export default memo(BlockSelectSalon);
