import cn from 'classnames';

import { NextPage } from 'next';
import React, { useCallback, useMemo, useState } from 'react';

import Typography from '@primitives/Typography';

import { switchItem, switchItemActive, switchWrapper, thumb } from './style.css';

interface ISwitch {
  className?: string;
  activeSwitch: string;
  switchNames: any;
  changeState?: (arg: string) => void;
}

const Switch: NextPage<ISwitch> = ({ className, activeSwitch, switchNames, changeState }) => {
  const [state, setState] = useState(activeSwitch);
  const countSwitchers = useMemo(() => Object.keys(switchNames).length, [switchNames]);

  const handleClick = useCallback(
    (switchedNames) => {
      setState(switchedNames);
      if (changeState) {
        changeState(switchedNames);
      }
    },
    [changeState]
  );

  const left = (100 / countSwitchers) * Object.keys(switchNames).indexOf(state) + '%';

  return (
    <div className={cn(className, switchWrapper)}>
      <div
        className={thumb}
        style={{
          width: `${100 / countSwitchers}%`,
          left: left,
        }}
      />
      {Object.keys(switchNames).map((key: string, idx: number) => (
        <Typography
          key={idx}
          onClick={() => handleClick(key)}
          as={'p'}
          type={'caption'}
          className={cn(switchItem, {
            [switchItemActive]: key === state,
          })}
        >
          {switchNames[key]}
        </Typography>
      ))}
    </div>
  );
};

export default Switch;
