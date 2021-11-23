import React, { memo, ReactNode } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';

interface ILinkWrapper {
  className?: string;
  href: string;
  children: ReactNode;
  isExternal: boolean;
}

const LinkWrapper: NextPage<ILinkWrapper> = ({ className, href, children, isExternal = false }) => {
  return (
    <Link href={href} passHref={isExternal}>
      <a className={className} {...(isExternal ? { target: '_blank' } : {})}>
        {children}
      </a>
    </Link>
  );
};

export default memo(LinkWrapper);
