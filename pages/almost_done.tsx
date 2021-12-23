import { NextPage } from 'next';
import { memo } from 'react';

import Layout from '@components/Layout';
import { IMetaName, IMetaProperty } from '@components/Layout/types';

import AlmostDonePage from '@pages/AlmostDonePage';

import { IRegion } from '@store/types';

const PAGE_TITLE = 'Выкуп автомобилей в Москве и области - «CarPrice» – быстро, дорого, надежно';

const metaProperty: IMetaProperty = {
  'og:url': 'https://www.carprice.ru',
  'og:title': 'Выкуп автомобилей в Москве и области – «CarPrice» – быстро, дорого, надежно',
  'og:image': 'https://www.carprice.ru/m/socialrev/socialimage.png',
  'og:site_name': 'CarPrice',
};

const metaName: IMetaName = {
  title: 'Выкуп автомобилей в Москве и области – «CarPrice» – быстро, дорого, надежно',
  description:
    'Выкуп автомобилей в Москве и области в любом состоянии срочно и дорого. Продай автомобиль за 2 часа: '
    + ' деньги сразу, без комиссий. Принимаем заявки с сайта, возможен выезд оценщика.',
  keywords: 'CarPrice, выкуп подержанных автомобилей, выкуп автомобилей, выкуп мотоциклов, выкуп скутеров',
};

interface IDone {
  locations: IRegion[];
}

const Done: NextPage<IDone> = function () {
  return (
    <Layout metaProperty={metaProperty} metaName={metaName} title={PAGE_TITLE}>
      <AlmostDonePage />
    </Layout>
  );
};

export default memo(Done);
