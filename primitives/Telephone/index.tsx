import cn from 'classnames';

import type { NextPage } from 'next';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import Icon from '@primitives/Icon';
import LinkWrapper from '@primitives/LinkWrapper';

import { IState } from '@store/types';

import { iconWrapper, wrapper } from './style.css';

const DEFAULT_PHONE = '+7 (800) 555-07-41';

interface ITelephone {
  isNeedIcon?: boolean;
  className?: string;
}

const Telephone: NextPage<ITelephone> = function ({ className, isNeedIcon }) {
  const { phone } = useSelector((state: IState) => state.region.activeRegion);
  const phoneToView = phone || DEFAULT_PHONE;

  return (
    <LinkWrapper className={cn(className, wrapper)} type="base" href={`tel:${phoneToView}`} isExternal={false}>
      <>
        {isNeedIcon && (
        <i className={iconWrapper}>
          <Icon icon="phone" width={16} height={16} />
        </i>
        )}
        <span>{phoneToView}</span>
      </>
    </LinkWrapper>
  );
};

export default memo(Telephone);
