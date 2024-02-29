import React from "react";

interface Props {
  stars: number;
  setStars: (stars: number) => void;
}

const RatingStars = ({ stars, setStars }: Props) => {
  const [hoveredStars, setHoveredStars] = React.useState<number | null>(null);

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value", e.target.value);
    setStars(parseFloat(e.target.value));
  };

  console.log("hoveredStars", hoveredStars);
  return (
    <div className="rating rating-lg rating-half">
      <input
        type="radio"
        name="rating-10"
        className="rating-hidden"
        value={0}
        checked={stars === 0}
        onChange={onOptionChange}
        onMouseEnter={() => setHoveredStars(0)}
        onMouseLeave={() => setHoveredStars(null)}
      />
      <input
        type="radio"
        name="rating-10"
        className={`bg-orange-500 mask mask-star-2 mask-half-1 ${
          hoveredStars === 0.5 ? "opacity-100" : "opacity-50"
        }`}
        value={0.5}
        checked={stars === 0.5}
        onChange={onOptionChange}
        onMouseEnter={() => setHoveredStars(0.5)}
        onMouseLeave={() => setHoveredStars(null)}
      />
      <input
        type="radio"
        name="rating-10"
        value={1}
        checked={stars === 1}
        onChange={onOptionChange}
        className="bg-orange-500 mask mask-star-2 mask-half-2"
        onMouseEnter={() => setHoveredStars(1)}
        onMouseLeave={() => setHoveredStars(null)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-500 mask mask-star-2 mask-half-1"
        value={1.5}
        checked={stars === 1.5}
        onChange={onOptionChange}
        onMouseEnter={() => setHoveredStars(1.5)}
        onMouseLeave={() => setHoveredStars(null)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-500 mask mask-star-2 mask-half-2"
        value={2}
        checked={stars === 2}
        onChange={onOptionChange}
        onMouseEnter={() => setHoveredStars(2)}
        onMouseLeave={() => setHoveredStars(null)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-500 mask mask-star-2 mask-half-1"
        value={2.5}
        checked={stars === 2.5}
        onChange={onOptionChange}
        onMouseEnter={() => setHoveredStars(2.5)}
        onMouseLeave={() => setHoveredStars(null)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-500 mask mask-star-2 mask-half-2"
        value={3}
        checked={stars === 3}
        onChange={onOptionChange}
        onMouseEnter={() => setHoveredStars(3)}
        onMouseLeave={() => setHoveredStars(null)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-500 mask mask-star-2 mask-half-1"
        value={3.5}
        checked={stars === 3.5}
        onChange={onOptionChange}
        onMouseEnter={() => setHoveredStars(3.5)}
        onMouseLeave={() => setHoveredStars(null)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-500 mask mask-star-2 mask-half-2"
        value={4}
        checked={stars === 4}
        onChange={onOptionChange}
        onMouseEnter={() => setHoveredStars(4)}
        onMouseLeave={() => setHoveredStars(null)}
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-500 mask mask-star-2 mask-half-1"
        value={4.5}
        checked={stars === 4.5}
        onChange={onOptionChange}
        onMouseEnter={() => setHoveredStars(4.5)}
        onMouseLeave={() => setHoveredStars(null)}
      />
      <input
        type="radio"
        name="rating-10"
        value={5}
        checked={stars === 5}
        onChange={onOptionChange}
        className="bg-orange-500 mask mask-star-2 mask-half-2"
        onMouseEnter={() => setHoveredStars(2)}
        onMouseLeave={() => setHoveredStars(null)}
      />
    </div>
  );
};

export default RatingStars;
