import cn from 'classnames';
import type { NextPage } from 'next';
import Link from 'next/link';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import Icon from '@primitives/Icon';

import { iconWrapper, wrapper } from './style.css';

const DEFAULT_PHONE = '+7 (800) 555-07-41';

interface ITelephone {
  isNeedIcon?: boolean;
  className?: string;
}

const Telephone: NextPage<ITelephone> = ({ className, isNeedIcon }) => {
  const { phone } = useSelector((state: any) => state.region.activeRegion);
  const phoneToView = phone || DEFAULT_PHONE;

  return (
    <Link href={`tel:${phoneToView}`}>
      <div className={cn(className, wrapper)}>
        {isNeedIcon && (
          <i className={iconWrapper}>
            <Icon icon={'phone'} width={16} height={16} />
          </i>
        )}
        <a>{phoneToView}</a>
      </div>
    </Link>
  );
};

export default memo(Telephone);
