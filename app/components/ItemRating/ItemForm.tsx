import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import RatingStars from "../RatingStars/RatingStars";
import { ItemType } from "./ItemList";
import Image from "next/image";

interface ItemProps {
  addItem: (item: ItemType) => void;
  availableItems: ItemType[];
  setShowItemForm: (show: boolean) => void;
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: "100%",
    maxWidth: "20rem",
    border: "1px solid #d2d6dc",
    borderRadius: "0.25rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    padding: "0.5rem",
  }),
};

const { Option } = components;
const IconOption = (props: any) => (
  <Option {...props}>
    <span className="flex items-center">
      <Image
        src={`/icons/${props.data.value}.png`}
        width={60}
        height={60}
        alt={props.data.label}
      />
      {props.data.label}{" "}
    </span>
  </Option>
);

const ItemForm = ({ addItem, setShowItemForm, availableItems }: ItemProps) => {
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);

  const handleChange = (selectedOption: any) => {
    setSelectedItem(selectedOption);
  };

  const handleAdd = () => {
    if (selectedItem) {
      addItem({ ...selectedItem, rating: stars, comment: comment });
      setShowItemForm(false);
    }
  };

  return (
    <div>
      <Select
        styles={customStyles}
        options={availableItems}
        onChange={handleChange}
        value={selectedItem}
        components={{ Option: IconOption }}
      />
      {selectedItem && (
        <RatingStars
          name={"itemRating"}
          label={`How was the ${selectedItem.label}?`}
          stars={stars}
          setStars={setStars}
        />
      )}

      <button
        className="btn btn-accent mt-2"
        disabled={selectedItem === null || stars === 0}
        onClick={() => handleAdd()}
      >
        Rate Item
      </button>
    </div>
  );
};

export default ItemForm;
