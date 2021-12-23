import { memo } from 'react';
import cn from 'classnames';
import { NextPage } from 'next';
import {
  iconStatus, iconMedium, iconHigh,
// eslint-disable-next-line import/extensions
} from './style.css.ts';

const statusOffice = {
  SLOW: 'SLOW',
  MEDIUM_HIGH: 'MEDIUM_HIGH',
  HIGH: 'HIGH',
};

interface ISelectItem {
  item: {
    value: string
    text: string,
    code: keyof typeof statusOffice,
    codeText: string
  }

}
const SelectItem: NextPage<ISelectItem> = function ({ item }) {
  const { text, code, codeText } = item;
  return (
    <>
      <span>{text}</span>
      <span className={cn(iconStatus, {
        [iconMedium]: code === statusOffice.MEDIUM_HIGH,
        [iconHigh]: code === statusOffice.HIGH,
      })}
      />
      <span>{codeText}</span>
    </>
  );
};

export default memo(SelectItem);
