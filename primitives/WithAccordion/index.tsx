import cn from 'classnames';

import { NextPage } from 'next';
import { memo, ReactNode } from 'react';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import Icon from '@primitives/Icon';

import {
  wrapper, accordionHeader, accordionInner, accordionDetails,
} from './style.css';

interface IWithAccordion {
  children: ReactNode;
  header: ReactNode;
  handleChange: () => void;
  expanded?: boolean;
  classNameDetails?: string;
}

const WithAccordion: NextPage<IWithAccordion> = function ({
  classNameDetails, expanded, handleChange, header, children,
}) {
  return (
    <div>
      <Accordion expanded={expanded} className={wrapper}>
        <AccordionSummary
          className={accordionHeader}
          onClick={handleChange}
          expandIcon={<Icon icon="arrowDown" width={16} height={16} />}
        >
          {header}
        </AccordionSummary>
        <AccordionDetails className={cn(classNameDetails, accordionDetails)}>
          <div className={accordionInner}>{children}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default memo(WithAccordion);
