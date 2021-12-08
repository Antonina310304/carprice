import { IReviewsList, IReviewsStars } from './types';

export const ReviewsRating: IReviewsStars[] = [
  {
    rating: 4.4,
    icon: 'yandex',
    text: 'yandex.maps',
    link: 'https://yandex.ru/maps',
    reviewsCount: 324,
  },
  {
    rating: 4.5,
    icon: 'google',
    text: 'google.maps',
    link: 'https://www.google.ru/maps/',
    reviewsCount: 101,
  },
  {
    rating: 4.0,
    icon: 'otzovik',
    text: 'otzovik.com',
    link: 'https://otzovik.com/reviews/avtosalon_carprice/',
    reviewsCount: 1367,
  },
];

export const reviewsList: IReviewsList[] = [
  {
    name: 'Василий',
    auto: 'Citroen C5 2004 года',
    rating: 5,
    review: 'Так случилось, что срочно понадобились деньги! Было авто! Решил продать!',
  },
  {
    name: 'Василий',
    auto: 'Citroen C5 2004 года',
    rating: 4.5,
    review:
      'Так случилось, что срочно понадобились деньги! Было авто! Решил продать! В голове была мысль о carprice. Почитал отзывы, созвонился. И мою проблему решили за 3 часа под ключ! Я доволен. И рекомендации только работать с ними!',
  },
  {
    name: 'Василий',
    auto: 'Citroen C5 2004 года',
    rating: 4,
    review:
      'Так случилось, что срочно понадобились деньги! Было авто! Решил продать! В голове была мысль о carprice. Почитал отзывы, созвонился. И мою проблему решили за 3 часа под ключ! Я доволен. И рекомендации только работать с ними!',
  },
];
