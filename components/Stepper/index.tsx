import { NextPage } from 'next';
import React from 'react';

interface IStepper {
  className: string;
  headers: any[];
}

const Stepper: NextPage<IStepper> = ({ className, headers }) => {
  return (
    <div className={className}>
      {headers.map((item) => (
        <div>
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
