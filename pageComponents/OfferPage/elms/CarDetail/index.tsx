import cn from 'classnames';

import React, { memo } from 'react';

import PropertiesList from '@primitives/PropertiesList';
import Typography from '@primitives/Typography';
import WithAccordion from '@primitives/WithAccordion';

import { textMedium } from '@styles/baseStyle';
import {
  accordionTitle, column, flex, title,
} from './style.css';

const mockList = {
  Пробег: '20 000',
  Цвет: 'Чёрный',
  Трансмиссия: 'Auto, CVT Xtronic',
  Руль: 'Левый',
};

const CarDetail = () => (
  <WithAccordion
    header={(
      <Typography as="p" type="base" className={accordionTitle}>
        Подробнее об автомобиле
      </Typography>
      )}
    handleChange={() => {}}
  >
    <div className={flex}>
      <div className={column}>
        <Typography className={cn(title, textMedium)} as="p" type="base">
          Audi 2021 A6 V (C8)
        </Typography>
        <PropertiesList list={mockList} />
      </div>
      <div className={column}>
        <Typography className={cn(title, textMedium)} as="p" type="base">
          VIN: XX0XXXXXX00000000
        </Typography>
        <PropertiesList list={mockList} />
      </div>
    </div>
  </WithAccordion>
);

export default memo(CarDetail);
