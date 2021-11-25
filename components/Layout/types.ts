export type IMetaNameProperty = 'og:url' | 'og:title' | 'og:image' | 'og:site_name';
export type IMetaNameItem = 'title' | 'description' | 'keywords';

export type IMetaProperty = Record<IMetaNameProperty, string>;
export type IMetaName = Record<IMetaNameItem, string>;

export interface NavItem {
  title: string;
  href: string;
}
