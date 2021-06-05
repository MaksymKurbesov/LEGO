import React from "react";
import { StarRatingIcon } from "../../components/Icons/StarRatingIcon";

const Rating = ({ rating }: { rating: number }) => {
  const TOTAL_STARS = 5;
  const ACTIVE_STAR_COL0R = `#ffc107`;
  return (
    <div>
      {[...new Array(TOTAL_STARS)].map((star, index) => (
        <StarRatingIcon
          key={index}
          fill={index < rating ? ACTIVE_STAR_COL0R : `lightgray`}
        />
      ))}
    </div>
  );
};

export default Rating;
