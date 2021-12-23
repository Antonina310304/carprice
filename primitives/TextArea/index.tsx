import cn from 'classnames';

import { NextPage } from 'next';
import { useCallback } from 'react';

import { TextareaAutosize } from '@mui/material';

import Caption from '@pages/AlmostDonePage/elms/Caption';

import Wrapper from '@primitives/Wrappper';

import { globalBorderRadius, globalThemeColorVars } from '@styles/globalTheme';
import { wrapper, textarea, textareaWrap } from './style.css';

interface ITextArea {
  title: string;
  className?: string;
  placeholder: string;
  defaultValue?: string;
  onChange: any;
  name: string;
}
const TextArea: NextPage<ITextArea> = function ({
  onChange, title, defaultValue, className, placeholder, name,
}) {
  const handleChange = useCallback(
    ({ target: { value } }) => {
      const e = {
        target: {
          name,
          value,
        },
      };
      onChange(e);
    },
    [name, onChange],
  );
  return (
    <Wrapper
      className={cn(wrapper, className)}
      borderRadius={globalBorderRadius.base}
      bgColor={globalThemeColorVars.backgroundSecondary}
    >
      <Caption title={title} />
      <div className={textareaWrap}>
        <TextareaAutosize
          onChange={handleChange}
          maxRows={4}
          aria-label="maximum height"
          className={textarea}
          name={name}
          placeholder={placeholder}
          value={defaultValue}
        />
      </div>
    </Wrapper>
  );
};

export default TextArea;
