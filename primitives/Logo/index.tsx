import type { NextPage } from 'next';
import Image from 'next/image';
import React, { memo } from 'react';

interface ILogo {
  className: string;
}

const Logo: NextPage<ILogo> = ({ className }) => {
  return (
    <div className={className}>
      <Image src={'/static/icons/logo.svg'} width={158} height={24} />
    </div>
  );
};

export default memo(Logo);
