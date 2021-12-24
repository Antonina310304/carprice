import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import AutoDetail from '@components/AutoDetail';

import { almostDoneStepMap } from '@pages/AlmostDonePage/constants';
import CarDetailStep from '@pages/AlmostDonePage/elms/CarDetailStep';
import ChangeCarModal from '@pages/AlmostDonePage/elms/ChangeCarModal';
import PageHeader from '@pages/AlmostDonePage/elms/PageHeader';
import Steps from '@pages/AlmostDonePage/elms/Steps';

import Typography from '@primitives/Typography';

import useMediaQuery from '@hooks/useMediaQuery';

import { IState } from '@store/types';

import { mediaQueryDesktop } from '@constants/mediaQuery';

import {
  aside, carDetailWrapper, mainContent, page, sectionWrapper, subtitle, text,
} from './style.css';

const AlmostDonePage = () => {
  const isDesktop = useMediaQuery(mediaQueryDesktop);

  const [showModal, setShowModal] = useState(false);

  const { almostDoneStep } = useSelector((state: IState) => state.view);

  const openModal = useCallback(() => setShowModal(true), [setShowModal]);
  const hideModal = useCallback(() => setShowModal(false), [setShowModal]);

  return (
    <div className={page}>
      <div className={isDesktop ? mainContent : ''}>
        <PageHeader />
        <section className={sectionWrapper}>
          <Typography as="h3" type="sectionSubTitle" className={subtitle}>
            Нам нужна дополнительная информация о вашем авто
          </Typography>
          <Typography as="p" type="main" className={text}>
            Мы нашли ваш VIN-номер, теперь нам нужна дополнительная информация о вашем автомобиле. Пожалуйста, заполните
            форму ниже.
          </Typography>

          {almostDoneStep === almostDoneStepMap.CONFIRM && (
            <div className={carDetailWrapper}>
              <CarDetailStep />
            </div>
          )}
        </section>
        <section>
          <Steps />
        </section>
      </div>
      {isDesktop && (
        <AutoDetail
          showDetail={almostDoneStep !== almostDoneStepMap.CONFIRM}
          className={aside}
          handleClick={openModal}
        />
      )}
      <ChangeCarModal showModal={showModal} hideModal={hideModal} />
    </div>
  );
};

export default memo(AlmostDonePage);
