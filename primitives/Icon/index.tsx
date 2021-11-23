import cn from 'classnames';
import type { NextPage } from 'next';
import { memo, useMemo } from 'react';

import { icon } from '@primitives/Icon/style.css';

import { internalIcons } from './list';

interface IInternalSvg {
  icon: keyof typeof internalIcons;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const Icon: NextPage<IInternalSvg> = ({ icon: rawIcon, onClick, width, height, className }) => {
  const RenderIcon = useMemo(() => internalIcons[rawIcon].default, [rawIcon]);
  return (
    <RenderIcon
      className={cn(icon, className)}
      height={height && `${height}px`}
      width={width && `${width}px`}
      onClick={onClick}
    />
  );
};

export default memo(Icon);
