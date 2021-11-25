import { NavItem } from '@components/Layout/types';

export interface PageHeaderNavElms {
  title: string;
  href?: string;
  dropdown?: NavItem[];
}
