import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '@components/Layout';
import { IMetaName, IMetaProperty } from '@components/Layout/types';
import MainPage from '@components/MainPage';

import { changeRegion, pushRegions } from '@store/regionSlice';
import { IRegion } from '@store/types';

import Theme from '@styles/theme';

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

interface IIndex {
  locations: IRegion[];
}

const Index: NextPage<IIndex> = ({ locations: serverLocations }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (serverLocations) {
      dispatch(pushRegions(serverLocations));
      const region = serverLocations.find((item: IRegion) => item.selected);
      if (region) {
        dispatch(changeRegion({ name: region.name }));
      }
    }
  }, [dispatch, serverLocations]);

  return (
    <Layout metaProperty={metaProperty} metaName={metaName} title={PAGE_TITLE}>
      <MainPage />
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    'https://api.carprice.ru/client/api/v1.0.0/cities-phones?api_token=bl1xzytbbohfgrcvtcfurx2fl11xspe4'
  );
  const locations = await response.json();

  return {
    props: { locations: locations.cities },
  };
};
