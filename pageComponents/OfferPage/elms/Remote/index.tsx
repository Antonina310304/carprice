import React, { memo } from 'react';

import { buttonWrapper } from '@pages/OfferPage/style.css';

import Typography from '@primitives/Typography';
import WithButton from '@primitives/WithButton';

import wrapper from './style.css';

import { twoColumn } from '@styles/baseStyle/baseStyle.css';
import { globalThemeColorVars } from '@styles/globalTheme';

const BUTTON_TEXT = 'Отправить данные';

const Remote = () => (
  <div className={wrapper}>
    <Typography type="main" color={globalThemeColorVars.fontsQuaternary}>
      Приедем к вам, оформим документы и заберем автомобиль. Наш колл-центр свяжется с вами для уточнения деталей
    </Typography>
    <div className={twoColumn}>
      <WithButton className={buttonWrapper} text={BUTTON_TEXT} />
    </div>
  </div>
);

export default memo(Remote);
