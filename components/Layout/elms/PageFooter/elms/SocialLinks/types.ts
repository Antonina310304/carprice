import internalIcons from '@primitives/Icon/list';

export interface ISocialLink {
  name: string;
  icon: keyof typeof internalIcons;
  href: string;
}
