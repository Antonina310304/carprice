import Head from 'next/head';
import { memo, ReactNode, useState } from 'react';

import RegionModal from '@components/RegionModal';

import PageFooter from './elms/PageFooter';
import PageHeader from './elms/PageHeader';

import { mainWrapper } from './style.css';
import { IMetaName, IMetaNameItem, IMetaNameProperty, IMetaProperty } from './types';

interface IMainContainer {
  children: ReactNode;
  title: string;
  metaProperty: IMetaProperty;
  metaName: IMetaName;
}

const Layout = ({ children, metaName, title, metaProperty }: IMainContainer) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <>
          {Object.keys(metaProperty).map((metaItem) => (
            <meta key={metaItem} property={metaItem} content={metaProperty[metaItem as IMetaNameProperty]} />
          ))}

          {Object.keys(metaName).map((metaItem) => (
            <meta key={metaItem} name={metaItem} content={metaName[metaItem as IMetaNameItem]} />
          ))}

          <title>{title}</title>
          <link rel="icon" type="image/png" href="/static/favicon.svg" />
          <link rel="icon" href="/static/favicon.svg" />
        </>
      </Head>
      <div className={mainWrapper}>
        <PageHeader openRegionModal={setIsOpen} />
        <>{children}</>
        <PageFooter openRegionModal={setIsOpen} />
        <RegionModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default memo(Layout);
