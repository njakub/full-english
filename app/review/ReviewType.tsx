import React from "react";

interface Props {
  reviewType: "basic" | "detailed";
  setReviewType: (reviewType: "basic" | "detailed") => void;
}

const ReviewType = ({ reviewType, setReviewType }: Props) => {
  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "basic" || e.target.value === "detailed")
      setReviewType(e.target.value);
  };
  return (
    <div className="flex items-center mt-2">
      <span className="label label-text mr-4">Review Type:</span>
      <label className="flex items-center mr-4">
        <input
          type="radio"
          name="basic"
          value="basic"
          className="radio radio-primary mr-1"
          checked={reviewType === "basic"}
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
          checked={reviewType === "detailed"}
          onChange={onOptionChange}
        />
        <span className="label-text">Detailed</span>
      </label>
    </div>
  );
};

export default ReviewType;
