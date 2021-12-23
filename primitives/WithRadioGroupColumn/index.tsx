import cn from 'classnames';

import { memo, PropsWithChildren } from 'react';

import { RadioGroup } from '@mui/material';

import { wrapper } from './style.css';

export type IListWithRadioGroupColumn<T> = {
  [key in T as string]: {
    title?: string;
    subTitle?: string;
  };
};

export interface ILabel {
  title?: string;
  subTitle?: string;
  key: string;
}

interface IWithRadioGroupColumn<T> {
  value: string;
  name: string;
  label: any;
  content?: any;
  handleChange: (arg: any) => void;
  list: IListWithRadioGroupColumn<T>;
}

const WithRadioGroupColumn = function<T, > (props: PropsWithChildren<IWithRadioGroupColumn<T>>) {
  const { label, content } = props;

  return (
    <RadioGroup value={props.value} onChange={props.handleChange} row name={props.name}>
      {Object.entries(props.list).map(([key, { title, subTitle }]) => (
        <div key={key} className={wrapper}>
          {label && label({ title, subTitle, key })}
          {key === props.value && content && content({ key })}
        </div>
      ))}
    </RadioGroup>
  );
};

export default memo(WithRadioGroupColumn);
