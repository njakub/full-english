import React from "react";

const Item = ({}) => {
  return (
    <div>
      <label className="form-control w-full max-w-xs mb-2">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Who shot first?
          </option>
          <option>Sausage</option>
          <option>Eggs</option>
        </select>

        <div className="label">
          <span className="label-text">Care to elaborate?</span>
        </div>
        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="Comment"
        ></input>
      </label>
    </div>
  );
};

export default Item;
