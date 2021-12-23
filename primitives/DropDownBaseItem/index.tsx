import { NextPage } from 'next';
import { memo } from 'react';

interface IWithMenuItem {
  item: any;
}
const DropDownBaseItem: NextPage<IWithMenuItem> = function ({ item }) {
  return (
    <>
      {item.text}
    </>
  );
};

export default memo(DropDownBaseItem);
