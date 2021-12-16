import cn from 'classnames';

import type { NextPage } from 'next';
import { memo, useMemo } from 'react';

import { icon } from '@primitives/Icon/style.css';

import { internalIcons } from './list';

interface IInternalSvg {
  icon: keyof typeof internalIcons;
  width?: number | 'auto';
  height?: number | 'auto';
  className?: string;
  onClick?: () => void;
  fill?: string;
}

const Icon: NextPage<IInternalSvg> = ({ fill, icon: rawIcon, onClick, width, height, className }) => {
  const RenderIcon = useMemo(() => internalIcons[rawIcon].default, [rawIcon]);
  return (
    <RenderIcon
      {...(fill ? { fill: fill } : {})}
      className={cn(icon, className)}
      height={height && `${height}px`}
      width={width && `${width}px`}
      onClick={onClick}
    />
  );
};

export default memo(Icon);
