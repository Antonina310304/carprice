// @ts-ignore
import EventMui from '@types/eventMui';

import { NextPage } from 'next';
import { memo, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BUTTON_TEXT, SERVER_ERROR_TEXT } from '@components/AutoNumbersBlock/constants';
import VinField from '@components/VinField';

import ButtonSubmit from '@primitives/ButtonSubmit';

import { changeVin, detectCar } from '@store/carSlice';
import { IState } from '@store/types';

import { loadingStatus } from '@constants/loadingStatus';

import vinRules from '../../validateRules/vinRules';

const KEY = 'vin';

interface IVinForm {
  handleSuccess: () => void;
}

const VinForm: NextPage<IVinForm> = ({ handleSuccess }) => {
  const dispatch = useDispatch();
  const { statusDetect, statusRequest, errorDetect, vin } = useSelector((state: IState) => state.carData);

  const isSubmitting = useMemo(() => {
    return statusRequest === loadingStatus.LOADING;
  }, [statusRequest]);

  const state = useMemo(() => {
    // если с сервера пришла ошибка
    if (statusRequest === loadingStatus.REJECTED) {
      return {
        valid: false,
        errorText: SERVER_ERROR_TEXT,
      };
    }

    // если пришли данные с сервера
    if (errorDetect && statusDetect) {
      return {
        valid: statusDetect === 'true',
        errorText: errorDetect,
      };
    }

    // при изменении номера
    return vinRules(vin);
  }, [errorDetect, statusDetect, statusRequest, vin]);

  useEffect(() => {
    if (statusRequest !== loadingStatus.RESOLVED) return;
    if (statusDetect === 'false') return;

    handleSuccess();
  }, [errorDetect, handleSuccess, statusDetect, statusRequest]);

  // сюда будет приходить ошибка
  const handleChange = useCallback(
    (e: EventMui) => {
      const newValue = e.target.value;

      dispatch(changeVin(newValue));
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      dispatch(detectCar({ key: KEY, value: vin }));
    },
    [vin, dispatch]
  );

  return (
    <form onSubmit={onSubmit}>
      <VinField value={vin} name={KEY} onChange={handleChange} valid={state.valid} errorText={state.errorText} />
      <ButtonSubmit buttonText={BUTTON_TEXT} disabled={!state.valid || isSubmitting} submitting={isSubmitting} />
    </form>
  );
};

export default memo(VinForm);
