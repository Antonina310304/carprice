import cn from 'classnames';

import { NextPage } from 'next';
import React from 'react';

import Icon from '@primitives/Icon';
import LinkWrapper from '@primitives/LinkWrapper';

import { socialLinks } from './data';
import { icon, list } from './style.css';
import { ISocialLink } from './types';

interface ISocialLinks {
  className?: string;
}
const SocialLinks: NextPage<ISocialLinks> = ({ className }) => {
  return (
    <ul className={cn(className, list)}>
      {socialLinks.map((item: ISocialLink) => (
        <li key={item.name}>
          <LinkWrapper href={item.href} isExternal={true}>
            <Icon className={icon} icon={item.icon} width={25} height={25} />
          </LinkWrapper>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
