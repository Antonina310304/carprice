import { NextPage } from 'next';
import { memo, ReactChild } from 'react';

import { IconButton } from '@mui/material';

import Icon from '@primitives/Icon';
import LightTooltip from '@primitives/LightTooltip';

interface IWithTooltip {
  tooltipContent: ReactChild;
  className?: string;
}

const WithTooltip: NextPage<IWithTooltip> = ({ className, tooltipContent }) => (
  <LightTooltip className={className} component={tooltipContent} theme={undefined}>
    <IconButton>
      <Icon icon="tooltip" width={16} height={16} />
    </IconButton>
  </LightTooltip>
);

export default memo(WithTooltip);
