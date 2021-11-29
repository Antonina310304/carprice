import { NextPage } from 'next';
import React from 'react';

import Icon from '@primitives/Icon';
import { wrapper } from '@primitives/StarRating/style.css';

interface IStarRating {
  icon: 'starFull' | 'starEmpty';
}

const StarRating: NextPage<IStarRating> = ({ icon }) => {
  return (
    <div className={wrapper}>
      <Icon icon={icon} width={20} height={20} />
    </div>
  );
};

export default StarRating;
