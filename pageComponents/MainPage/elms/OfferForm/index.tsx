import cn from 'classnames';
import { stat } from 'fs';
import { json } from 'stream/consumers';

import { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';

import AutoNumbersBlock from '@components/AutoNumbersBlock';
import BrandForm from '@components/BrandForm';

import Wrapper from '@primitives/Wrappper';

import { offerFormWrapper } from './style.css';

import { globalThemeColorVars } from '@styles/globalTheme';

interface IOfferForm {
  className?: string;
}

const offerFormType = {
  VIN: 'vin',
  BRAND: 'brand',
};

const OfferForm: NextPage<IOfferForm> = ({ className }) => {
  const [activeForm, setActiveForm] = useState(offerFormType.VIN);

  return (
    <Wrapper className={cn(offerFormWrapper, className)} bgColor={globalThemeColorVars.white} borderRadius={8}>
      {activeForm === offerFormType.VIN && <AutoNumbersBlock onChangeForm={() => setActiveForm(offerFormType.BRAND)} />}
      {activeForm === offerFormType.BRAND && <BrandForm onChangeForm={() => setActiveForm(offerFormType.VIN)} />}
    </Wrapper>
  );
};

export default OfferForm;
