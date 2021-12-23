import cn from 'classnames';

import { NextPage } from 'next';
import { memo } from 'react';

import Icon from '@primitives/Icon';

import { stepState } from '../../constants';
import { active, completed, icon } from './style.css';

interface IStepIcon {
  index: number;
  view: string;
}

const StepIcon: NextPage<IStepIcon> = function ({ index, view }) {
  return (
    <p
      className={cn(icon, {
        [active]: view === stepState.ACTIVE,
        [completed]: view === stepState.COMPLETED,
      })}
    >
      {view === stepState.COMPLETED && <Icon icon="check" width={16} height={16} />}
      {view !== stepState.COMPLETED && index}
    </p>
  );
};

export default memo(StepIcon);
