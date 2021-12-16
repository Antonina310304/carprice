import AlmostDoneStepTypes from 'types/almostDoneStepTypes';

import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithStepperVertical from '@components/WithStepperVertical';

import { almostDoneStepMap } from '@pages/AlmostDonePage/constants';

import { IState } from '@store/types';
import { changeAlmostDoneStep } from '@store/viewSlice';

import { getKeyByValue } from '@utils/getKeyByValue';

import One from './elms/One';
import Three from './elms/Three';
import Two from './elms/Two';

const stepLabels = ['Основные характеристики', 'Дополнительное оборудование', 'Автоистория'];
const stepsComponents = [One, Two, Three];

const currentStepMap: Record<AlmostDoneStepTypes, number> = {
  [almostDoneStepMap.CONFIRM]: -1,
  [almostDoneStepMap.FEATURES]: 0,
  [almostDoneStepMap.HARDWARE]: 1,
  [almostDoneStepMap.HISTORY]: 2,
};

const Steps = () => {
  const dispatch = useDispatch();
  const { almostDoneStep } = useSelector((state: IState) => {
    return state.view;
  });

  const handleChangeActiveStep = useCallback(
    (activeStep: number | undefined) => {
      const currentStep = getKeyByValue(currentStepMap, activeStep) || almostDoneStepMap.CONFIRM;
      dispatch(changeAlmostDoneStep(currentStep));
    },
    [dispatch]
  );

  return (
    <WithStepperVertical
      steps={stepLabels}
      startStep={currentStepMap[almostDoneStep]}
      handleChangeActiveStep={handleChangeActiveStep}
    >
      {(handleNext: any, activeStep: number, idx: number) => {
        const Component = stepsComponents[idx];
        return <Component handleNext={handleNext} />;
      }}
    </WithStepperVertical>
  );
};

export default memo(Steps);
