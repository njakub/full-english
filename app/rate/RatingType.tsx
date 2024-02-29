import React from "react";

interface Props {
  ratingType: "basic" | "detailed";
  setRatingType: (ratingType: "basic" | "detailed") => void;
}

const RatingType = ({ ratingType, setRatingType }: Props) => {
  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "basic" || e.target.value === "detailed")
      setRatingType(e.target.value);
  };
  return (
    <div className="flex items-center mt-2">
      <span className="mr-4">Rating Type:</span>
      <label className="flex items-center mr-4">
        <input
          type="radio"
          name="basic"
          value="basic"
          className="radio radio-primary mr-1"
          checked={ratingType === "basic"}
          onChange={onOptionChange}
        />
        <span className="label-text">Basic</span>
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="detailed"
          value="detailed"
          className="radio radio-primary mr-1"
          checked={ratingType === "detailed"}
          onChange={onOptionChange}
        />
        <span className="label-text">Detailed</span>
      </label>
    </div>
  );
};

export default RatingType;
