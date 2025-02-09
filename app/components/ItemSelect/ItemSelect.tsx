import React, { useState } from "react";
import Select, { components, SingleValue } from "react-select";
import Image from "next/image";

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

interface ItemSelectProps {
  selectedItems: ItemOption[];
  setSelectedItems: (items: ItemOption[]) => void;
  availableItems: ItemOption[];
  setAvailableItems: (items: ItemOption[]) => void;
}

const ItemSelect = ({
  selectedItems,
  setSelectedItems,
  availableItems,
  setAvailableItems,
}: ItemSelectProps) => {
  const handleChange = (newValue: SingleValue<ItemOption>) => {
    if (newValue) {
      setSelectedItems([...selectedItems, newValue as ItemOption]);
      setAvailableItems(
        availableItems.filter((item) => item.value !== newValue.value)
      );
    }
  };

  return (
    <Select
      styles={customStyles}
      options={availableItems}
      onChange={handleChange}
      components={{ Option: IconOption }}
    />
  );
};

export default ItemSelect;
