import React from "react";

interface Props {
  stars: number;
  setStars: (stars: number) => void;
  label?: string;
  name: string;
}

const RATING_DESCRIPTIONS = {
  0: "No Rating",
  0.5: "Terrible",
  1: "Poor",
  1.5: "Poor+",
  2: "Meh",
  2.5: "OK",
  3: "Decent",
  3.5: "Solid",
  4: "Good",
  4.5: "Very Good",
  5: "Perfection!",
};

const RatingStars = ({ stars, setStars, label, name }: Props) => {
  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStars(parseFloat(e.target.value));
  };
  return (
    <label className="form-control w-full max-w-xs mb-2">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <div className="rating rating-lg rating-half flex items-center">
        <input
          type="radio"
          name={`${name}-0`}
          className="rating-hidden"
          value={0}
          checked={stars === 0}
          onChange={onOptionChange}
        />
        <input
          type="radio"
          name={`${name}-0.5`}
          className="bg-orange-500 mask mask-star-2 mask-half-1"
          value={0.5}
          checked={stars === 0.5}
          onChange={onOptionChange}
        />
        <input
          type="radio"
          name={`${name}-1`}
          value={1}
          checked={stars === 1}
          onChange={onOptionChange}
          className="bg-orange-500 mask mask-star-2 mask-half-2"
        />
        <input
          type="radio"
          name={`${name}-1.5`}
          className="bg-orange-500 mask mask-star-2 mask-half-1"
          value={1.5}
          checked={stars === 1.5}
          onChange={onOptionChange}
        />
        <input
          type="radio"
          name={`${name}-2`}
          className="bg-orange-500 mask mask-star-2 mask-half-2"
          value={2}
          checked={stars === 2}
          onChange={onOptionChange}
        />
        <input
          type="radio"
          name={`${name}-2.5`}
          className="bg-orange-500 mask mask-star-2 mask-half-1"
          value={2.5}
          checked={stars === 2.5}
          onChange={onOptionChange}
        />
        <input
          type="radio"
          name={`${name}-3`}
          className="bg-orange-500 mask mask-star-2 mask-half-2"
          value={3}
          checked={stars === 3}
          onChange={onOptionChange}
        />
        <input
          type="radio"
          name={`${name}-3.5`}
          className="bg-orange-500 mask mask-star-2 mask-half-1"
          value={3.5}
          checked={stars === 3.5}
          onChange={onOptionChange}
        />
        <input
          type="radio"
          name={`${name}-4`}
          className="bg-orange-500 mask mask-star-2 mask-half-2"
          value={4}
          checked={stars === 4}
          onChange={onOptionChange}
        />
        <input
          type="radio"
          name={`${name}-4.5`}
          className="bg-orange-500 mask mask-star-2 mask-half-1"
          value={4.5}
          checked={stars === 4.5}
          onChange={onOptionChange}
        />
        <input
          type="radio"
          name={`${name}-5`}
          value={5}
          checked={stars === 5}
          onChange={onOptionChange}
          className="bg-orange-500 mask mask-star-2 mask-half-2"
        />
        <div className="ml-2">
          {RATING_DESCRIPTIONS[stars as keyof typeof RATING_DESCRIPTIONS]}
        </div>
      </div>
    </label>
  );
};

export default RatingStars;
