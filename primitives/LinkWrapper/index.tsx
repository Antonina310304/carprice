import cn from 'classnames';

import type { NextPage } from 'next';
import Link from 'next/link';
import React, { memo, ReactNode } from 'react';

import Typography from '@primitives/Typography';

import { link } from '@styles/baseStyle';

interface ILinkWrapper {
  className?: string;
  href: string;
  children: ReactNode;
  isExternal: boolean;
  type?: string;
}

const LinkWrapper: NextPage<ILinkWrapper> = ({ type = 'base', className, href, children, isExternal = false }) => {
  return (
    <Link href={href} passHref={true}>
      <Typography as={'a'} className={cn(link, className)} type={type} {...(isExternal ? { target: '_blank' } : {})}>
        {children}
      </Typography>
    </Link>
  );
};

export default memo(LinkWrapper);
