import { NextPage } from 'next';
import { memo } from 'react';

interface IWithMenuItem {
  item: any;
}
const DropDownBaseItem: NextPage<IWithMenuItem> = function ({ item }) {
  return (
    // TODO fix
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {item.text}
    </>
  );
};

export default memo(DropDownBaseItem);
