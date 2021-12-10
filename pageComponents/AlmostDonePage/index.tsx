import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AutoDetail from '@components/AutoDetail';
import CarDetailSelect from '@components/CarDetailSelect';

import { almostDoneStepMap } from '@pages/AlmostDonePage/constants';
import ChangeCarModal from '@pages/AlmostDonePage/elms/ChangeCarModal';
import PageHeader from '@pages/AlmostDonePage/elms/PageHeader';
import Steps from '@pages/AlmostDonePage/elms/Steps';

import Typography from '@primitives/Typography';
import WithButton from '@primitives/WithButton';

import useMediaQuery from '@hooks/useMediaQuery';

import { changeAlmostDoneStep } from '@store/viewSlice';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import {
  aside,
  carDetail,
  carDetailInner,
  carDetailWrapper,
  mainContent,
  page,
  sectionWrapper,
  subtitle,
  text,
} from './style.css';

import { textMedium } from '@styles/baseStyle';

const BUTTON_TEXT = 'Подтвердить';

const AlmostDonePage = () => {
  const isDesktop = useMediaQuery(mediaQueryDesktop);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const { almostDoneStep } = useSelector((state: any) => {
    return state.view;
  });

  const { brand, year, model } = useSelector((state: any) => {
    return state.carData;
  });

  useEffect(() => {}, []);
  const openModal = useCallback(() => setShowModal(true), [setShowModal]);
  const hideModal = useCallback(() => setShowModal(false), [setShowModal]);

  const goToStep = useCallback((stepTo) => dispatch(changeAlmostDoneStep(stepTo)), [dispatch]);

  return (
    <div className={page}>
      <div className={isDesktop ? mainContent : ''}>
        <PageHeader />
        <section className={sectionWrapper}>
          <Typography as={'h3'} type={'sectionSubTitle'} className={subtitle}>
            Нам нужна дополнительная информация о вашем авто
          </Typography>
          <Typography as={'p'} type={'main'} className={text}>
            Мы нашли ваш VIN-номер, теперь нам нужна дополнительная информация о вашем автомобиле. Пожалуйста, заполните
            форму ниже.
          </Typography>

          {almostDoneStep === almostDoneStepMap.CONFIRM && (
            <div className={carDetailWrapper}>
              <CarDetailSelect classNameWrapper={carDetailInner} />
              <WithButton
                className={carDetailInner}
                text={BUTTON_TEXT}
                onClick={() => goToStep(almostDoneStepMap.FEATURES)}
              />
            </div>
          )}
          {almostDoneStep !== almostDoneStepMap.CONFIRM && (
            <p className={carDetail}>
              <span className={textMedium}>{`${brand}  ${year} `}</span>
              {model}
            </p>
          )}
        </section>
        <section>
          <Steps />
        </section>
      </div>
      {isDesktop && (
        <AutoDetail
          showDetail={almostDoneStep === almostDoneStepMap.FEATURES}
          className={aside}
          handleClick={openModal}
        />
      )}
      <ChangeCarModal showModal={showModal} hideModal={hideModal} />
    </div>
  );
};

export default AlmostDonePage;
