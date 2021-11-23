export interface IMenuItem {
  title: string;
  href: string;
}

export interface IMenu {
  title: string;
  href?: string;
  dropdown?: IMenuItem[];
}
