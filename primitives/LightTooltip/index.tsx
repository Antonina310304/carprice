import cn from 'classnames';

import { memo, ReactChild, ReactElement } from 'react';

import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';

import { tooltipStyle, wrapper } from '@primitives/LightTooltip/style.css';

interface ILightTooltip {
  children: ReactElement;
  component: ReactChild;
  className?: string;
  [key: string]: any;
}

const LightTooltip = styled(({ className, component, ...props }: ILightTooltip) => (
  <Tooltip arrow title={component} {...props} className={cn(className, wrapper)} classes={{ popper: className }} />
))(tooltipStyle);
export default memo(LightTooltip);
