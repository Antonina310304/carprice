import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { memo, useMemo } from 'react';

import LinkWrapper from '@primitives/LinkWrapper';

interface ILogo {
  className?: string;
}

const Logo: NextPage<ILogo> = function ({ className }) {
  const router = useRouter();

  const isMainPage = useMemo(() => router.pathname === '/', [router.pathname]);

  return (
    <>
      {isMainPage && (
        <div className={className}>
          <Image src="/static/icons/logo.svg" width={158} height={24} alt="Логотип" />
        </div>
      )}
      {!isMainPage && (
        <LinkWrapper href="/" className={className} isExternal={false}>
          <Image src="/static/icons/logo.svg" width={158} height={24} alt="Логотип" />
        </LinkWrapper>
      )}
    </>
  );
};

export default memo(Logo);
