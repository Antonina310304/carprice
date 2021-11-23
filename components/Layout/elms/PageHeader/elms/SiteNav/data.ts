import { IMenu } from '../../types';

const menuList: IMenu[] = [
  {
    title: 'О компании',
    dropdown: [
      {
        title: 'Отзывы',
        href: 'https://www.carprice.ru/otzyvy',
      },
      {
        title: 'Работа у нас',
        href: 'http://job.carprice.ru',
      },
      {
        title: 'Франчайзинг',
        href: 'http://franchise.carprice.ru',
      },
    ],
  },
  {
    title: 'Полезная информация',
    dropdown: [
      {
        title: 'Онлайн-оценка',
        href: 'https://www.carprice.ru/service/otsenka-avtomobilya-online',
      },
      {
        title: 'Необходимые документы',
        href: 'https://www.carprice.ru/documents',
      },
      {
        title: 'Пошаговая инструкция',
        href: 'https://www.carprice.ru/how-works',
      },
      {
        title: 'Юридическая информация',
        href: 'https://www.carprice.ru/legal-info',
      },
      {
        title: 'Помощь',
        href: 'https://carprice.typeform.com/to/CS6XhJDn',
      },
    ],
  },
  {
    title: 'Что выкупаем',
    dropdown: [
      {
        title: 'По маркам автомобилей',
        href: 'https://www.carprice.ru/marki',
      },
      {
        title: 'По типу автомобилей',
        href: 'https://www.carprice.ru/buyout',
      },
      {
        title: 'Услуги для выкупа',
        href: 'https://www.carprice.ru/service',
      },
      {
        title: 'Корпоративный выкуп',
        href: 'http://b2b.carprice.ru/',
      },
    ],
  },
  {
    title: 'Автодилерам',
    href: 'https://dealer.carprice.auction/new/?utm_source=batton_sandwich/',
  },
  {
    title: 'Контакты',
    href: 'https://www.carprice.ru/kontakty',
  },
];

export default menuList;
