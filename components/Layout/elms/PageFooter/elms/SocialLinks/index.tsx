import cn from 'classnames';

import { NextPage } from 'next';

import Icon from '@primitives/Icon';
import LinkWrapper from '@primitives/LinkWrapper';

import socialLinks from './socialLinks';
import { icon, list } from './style.css';
import { ISocialLink } from './types';

interface ISocialLinks {
  className?: string;
}
const SocialLinks: NextPage<ISocialLinks> = function ({ className }) {
  return (
    <ul className={cn(className, list)}>
      {socialLinks.map((item: ISocialLink) => (
        <li key={item.name}>
          <LinkWrapper href={item.href} isExternal>
            <Icon className={icon} icon={item.icon} width={25} height={25} />
          </LinkWrapper>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
