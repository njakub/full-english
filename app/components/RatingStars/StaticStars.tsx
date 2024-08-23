import React from "react";

interface Props {
  stars?: number;
}

const RatingStars = ({ stars }: Props) => {
  return (
    <label className="form-control w-full max-w-xs mb-2">
      <div className="rating rating-half flex items-center">
        <input
          type="radio"
          name="rating-0"
          className="rating-hidden"
          checked={stars === 0}
          readOnly
        />
        <input
          type="radio"
          name="rating-0.5"
          className="bg-orange-500 mask mask-star-2 mask-half-1"
          checked={stars === 0.5}
          readOnly
        />
        <input
          type="radio"
          name="rating-1"
          checked={stars === 1}
          readOnly
          className="bg-orange-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name="rating-1.5"
          className="bg-orange-500 mask mask-star-2 mask-half-1"
          checked={stars === 1.5}
          readOnly
        />
        <input
          type="radio"
          name="rating-2"
          className="bg-orange-500 mask mask-star-2 mask-half-2"
          checked={stars === 2}
          readOnly
        />
        <input
          type="radio"
          name="rating-2.5"
          className="bg-orange-500 mask mask-star-2 mask-half-1"
          checked={stars === 2.5}
          readOnly
        />
        <input
          type="radio"
          name="rating-3"
          className="bg-orange-500 mask mask-star-2 mask-half-2"
          checked={stars === 3}
          readOnly
        />
        <input
          type="radio"
          name="rating-3.5"
          className="bg-orange-500 mask mask-star-2 mask-half-1"
          checked={stars === 3.5}
          readOnly
        />
        <input
          type="radio"
          name="rating-4"
          className="bg-orange-500 mask mask-star-2 mask-half-2"
          checked={stars === 4}
          readOnly
        />
        <input
          type="radio"
          name="rating-4.5"
          className="bg-orange-500 mask mask-star-2 mask-half-1"
          checked={stars === 4.5}
          readOnly
        />
        <input
          type="radio"
          name="rating-5"
          checked={stars === 5}
          readOnly
          className="bg-orange-500 mask mask-star-2 mask-half-2"
        />
      </div>
    </label>
  );
};

export default RatingStars;
