import AlmostDoneStepTypes from 'types/almostDoneStepTypes';

import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import WithStepperVertical from '@components/WithStepperVertical';

import { almostDoneStepMap } from '@pages/AlmostDonePage/constants';

import { changeAlmostDoneStep } from '@store/viewSlice';

import { getKeyByValue } from '@utils/getKeyByValue';

import One from './elms/One';
import Three from './elms/Three';
import Two from './elms/Two';

const stepLabels = ['Основные характеристики', 'Дополнительное оборудование', 'Автоистория'];
const stepsComponents = [One, Two, Three];

const stepLength = stepLabels.length - 1;

const currentStepMap: Record<AlmostDoneStepTypes, number> = {
  [almostDoneStepMap.CONFIRM]: -1,
  [almostDoneStepMap.FEATURES]: 0,
  [almostDoneStepMap.HARDWARE]: 1,
  [almostDoneStepMap.HISTORY]: 2,
};

const Steps = () => {
  const dispatch = useDispatch();
  const { almostDoneStep } = useSelector((state: any) => {
    return state.view;
  });

  console.log(almostDoneStep);

  const handleChangeActiveStep = useCallback(
    () => (activeStep: number) => {
      const currentStep = getKeyByValue(currentStepMap, activeStep) || almostDoneStepMap.CONFIRM;
      dispatch(changeAlmostDoneStep(currentStep));
    },
    [dispatch]
  );
  console.log(currentStepMap[almostDoneStep]);
  return (
    <WithStepperVertical
      steps={stepLabels}
      startStep={currentStepMap[almostDoneStep]}
      handleChangeActiveStep={handleChangeActiveStep}
    >
      {(handleNext: any, activeStep: number) => {
        console.log(activeStep);
        const indexComponent = activeStep > stepLength ? stepLength : activeStep;
        const Component = stepsComponents[indexComponent] || stepsComponents[0];
        return <Component handleNext={handleNext} />;
      }}
    </WithStepperVertical>
  );
};

export default memo(Steps);
