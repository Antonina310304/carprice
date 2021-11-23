import Layout from '@components/Layout';
import { IMetaName, IMetaProperty } from '@components/Layout/types';

import Wrapper from '@primitives/Wrappper';

import { mainContainer } from '@styles/baseStyle';

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
    'Выкуп автомобилей в Москве и области в любом состоянии срочно и дорого. Продай автомобиль за 2 часа: деньги сразу, без комиссий. Принимаем заявки с сайта, возможен выезд оценщика.',
  keywords: 'CarPrice, выкуп подержанных автомобилей, выкуп автомобилей, выкуп мотоциклов, выкуп скутеров',
};

const Index = () => {
  return (
    <Layout metaProperty={metaProperty} metaName={metaName} title={PAGE_TITLE}>
      <Wrapper className={mainContainer}>главная страница</Wrapper>
    </Layout>
  );
};

export default Index;
