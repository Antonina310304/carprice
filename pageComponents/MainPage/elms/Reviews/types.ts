import internalIcons from '@primitives/Icon/list';

export interface IReviewsStars {
  rating: number;
  icon: keyof typeof internalIcons;
  text: string;
  link: string;
  reviewsCount: number;
}

export interface IReviewsList {
  name: string;
  auto: string;
  rating: number;
  review: string;
}
