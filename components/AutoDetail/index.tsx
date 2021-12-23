import cn from 'classnames';

import { NextPage } from 'next';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import Icon from '@primitives/Icon';
import colorMap from '@primitives/RadioColor/colorMap';
import { ColorType } from '@primitives/RadioColor/types';
import Typography from '@primitives/Typography';
import Wrapper from '@primitives/Wrappper';

import { IState } from '@store/types';

import { questionsStepOneFields } from '@constants/fields';

import spacing from '@utils/spacing';

import { textMedium } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';
import {
  head, item, listItem, main, value, wrapper, edit,
} from './style.css';

const mileage = questionsStepOneFields.MILEAGE;
const color = questionsStepOneFields.COLOR;
const wheel = questionsStepOneFields.WHEEL;

const carDetailMap = {
  [mileage]: 'Пробег',
  [color]: 'Цвет',
  [wheel]: 'Руль',
};

const VIN = 'VIN';
const NUMBER = 'Номер';

interface IAutoDetail {
  className?: string;
  showDetail?: boolean;
  handleClick?: () => void;
}

const AutoDetail: NextPage<IAutoDetail> = function ({ handleClick, showDetail = true, className }) {
  const {
    vin,
    regNumber,
    carDetail: { brandId, modelId, yearId },
  } = useSelector((state: IState) => state.carData);

  const questionsStepOne = useSelector((state: IState) => state.userData.questionsStepOne);
  const { models, brands } = useSelector((state: IState) => state.catalogs);

  const model = useMemo(() => models.find((modelItem) => modelItem.value === modelId)?.text, [modelId, models]);

  const brand = useMemo(() => brands.find((modelItem) => modelItem.value === brandId)?.text, [brandId, brands]);

  return (
    <Wrapper
      className={cn(wrapper, className)}
      borderRadius={spacing(1)}
      bgColor={globalThemeColorVars.backgroundSecondary}
      padding={spacing(3)}
    >
      <div className={head}>
        <Typography as="p" type="base" className={cn(item, textMedium)}>
          {`${brand}  ${yearId}  ${model}`}
          &nbsp;&nbsp;
          <Icon icon="edit" width={20} height={20} onClick={handleClick} className={edit} />
        </Typography>
        <Typography as="p" type="base" className={item}>
          {!regNumber && (
            <>
              <span className={textMedium}>{VIN}: </span>
              {vin}
            </>
          )}

          {regNumber && !vin && (
            <>
              <span className={textMedium}>{NUMBER}: </span>
              {regNumber}
            </>
          )}
        </Typography>
      </div>
      {showDetail && (
        <div className={main}>
          <Typography as="p" type="base" className={cn(item, listItem)}>
            <>
              <span className={value}>{carDetailMap[mileage]}</span>
              <span className={value}>
                {' '}
                {questionsStepOne[mileage] ? Number(questionsStepOne[mileage]).toLocaleString('ru-RU') : '-'}
              </span>
            </>
          </Typography>
          <Typography as="p" type="base" className={cn(item, listItem)}>
            <>
              <span className={value}>{carDetailMap[color]}</span>
              <span className={value}> {colorMap[questionsStepOne[color] as ColorType]}</span>
            </>
          </Typography>
          <Typography as="p" type="base" className={cn(item, listItem)}>
            <>
              <span className={value}>{carDetailMap[wheel]}</span>
              <span className={value}> {questionsStepOne[wheel] === 'Left' ? 'Левый' : 'Правый'}</span>
            </>
          </Typography>
        </div>
      )}
    </Wrapper>
  );
};

export default memo(AutoDetail);
