import cn from 'classnames';

import { NextPage } from 'next';
import { activeDot, dot, dots } from './style.css';

interface IDots {
  className?: string;
  count: number;
  activeElement: number;
}
const Dots: NextPage<IDots> = function ({ className, count, activeElement }) {
  return (
    <ul className={cn(className, dots)}>
      {new Array(count).fill('').map((_, index) => (
        <li key={index} className={cn(dot, activeElement === index && activeDot)} />
      ))}
    </ul>
  );
};

export default Dots;
