import { NextPage } from 'next';
import React, { memo } from 'react';

interface IWithMenuItem {
  item: any;
}
const DropDownBaseItem: NextPage<IWithMenuItem> = ({ item }) => (
  <>
    {item.text}
  </>
);

export default memo(DropDownBaseItem);
