import type { NextPage } from 'next';
import { memo } from 'react';

import Region from '@components/Region';

import { mainContainer } from '@styles/baseStyle';

interface IPageFooter {
  openRegionModal: (arg: boolean) => void;
}

const PageFooter: NextPage<IPageFooter> = ({ openRegionModal }) => {
  return (
    <div className={mainContainer}>
      <Region openRegionModal={openRegionModal} />
      подвал
    </div>
  );
};

export default memo(PageFooter);
