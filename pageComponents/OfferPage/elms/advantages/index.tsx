import { memo } from 'react';

import List from '@primitives/List';

import { wrapper } from './style.css';

const advantagesList = [
  'Бесплатно, никаких скрытых платежей',
  '100% прозрачность на всех этапах',
  'Берём все риски на себя',
  'Оплатим штрафы за вас',
  'Платим больше, чем в трейд-ин',
];

const Advantages = function () {
  return (
    <div className={wrapper}>
      <List list={advantagesList} />
    </div>
  );
};

export default memo(Advantages);
