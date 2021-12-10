import cn from 'classnames';

import { NextPage } from 'next';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import Icon from '@primitives/Icon';
import Typography from '@primitives/Typography';
import Wrapper from '@primitives/Wrappper';

import { spacing } from '@utils/spacing';

import { head, item, listItem, main, value, wrapper, edit } from './style.css';

import { textMedium } from '@styles/baseStyle';
import { globalThemeColorVars } from '@styles/globalTheme';

const carDetailMap = {
  mileage: 'Пробег',
  color: 'Цвет',
  transmission: 'Трансмиссия',
  wheel: 'Руль',
  volume: 'Объем двигателя',
};

const VIN = 'VIN';
const NUMBER = 'Номер';

type Keys = keyof typeof carDetailMap;

interface IAutoDetail {
  className?: string;
  showDetail?: boolean;
  handleClick?: () => void;
}

const AutoDetail: NextPage<IAutoDetail> = ({ handleClick, showDetail = true, className }) => {
  const { carData } = useSelector((state: any) => {
    return state;
  });
  return (
    <Wrapper
      className={cn(wrapper, className)}
      borderRadius={spacing(1)}
      bgColor={globalThemeColorVars.backgroundSecondary}
      padding={spacing(3)}
    >
      <div className={head}>
        <Typography as={'p'} type={'base'} className={cn(item, textMedium)}>
          {`${carData.brand}  ${carData.year}  ${carData.model}`}
          &nbsp;&nbsp;
          {showDetail && <Icon icon={'edit'} width={20} height={20} onClick={handleClick} className={edit} />}
        </Typography>
        <Typography as={'p'} type={'base'} className={item}>
          {!carData.number && (
            <>
              <span className={textMedium}>{VIN}: </span>
              {carData.vin}
            </>
          )}

          {carData.number && !carData.vin && (
            <>
              <span className={textMedium}>{NUMBER}: </span>
              {carData.number}
            </>
          )}
        </Typography>
      </div>
      {showDetail && (
        <div className={main}>
          {Object.keys(carDetailMap).map((key: string) => (
            <Typography key={key} as={'p'} type={'base'} className={cn(item, listItem)}>
              <>
                <span className={value}>{carDetailMap[key as Keys]}</span>
                <span className={value}> {carData[key] === '' ? '-' : carData[key]}</span>
              </>
            </Typography>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default memo(AutoDetail);
