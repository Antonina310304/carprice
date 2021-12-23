import { NextPage } from 'next';
import { Rating } from '@mui/material';

import StarRating from '@primitives/StarRating';

interface IStarEmptyRating {
  defaultValue?: number;
  className?: string;
  precision?: number;
}

const CustomRating: NextPage<IStarEmptyRating> = function ({ className, precision = 0.5, defaultValue = 0 }) {
  return (
    <Rating
      className={className}
      name="customized-color"
      precision={precision}
      defaultValue={defaultValue}
      icon={<StarRating icon="starFull" />}
      emptyIcon={<StarRating icon="starEmpty" />}
      readOnly
    />
  );
};

export default CustomRating;
