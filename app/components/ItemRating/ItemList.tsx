import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import ItemView from "./ItemView";
import RatingStars from "../RatingStars/RatingStars";

export interface ItemType {
  label: string;
  value: string;
  rating?: number;
  comment?: string;
}

export const BREAKFAST_ITEMS: ItemType[] = [
  { value: "bacon", label: "Bacon" },
  { value: "eggs", label: "Eggs" },
  { value: "sausage", label: "Sausage" },
  { value: "toast", label: "Toast" },
  { value: "baked-beans", label: "Baked Beans" },
  { value: "hash-browns", label: "Hash browns" },
  { value: "mushrooms", label: "Mushrooms" },
  { value: "tomatoes", label: "Tomatoes" },
  { value: "black-pudding", label: "Black Pudding" },
  { value: "white-pudding", label: "White Pudding" },
  { value: "chips", label: "Chips" },
];

const ItemsList = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [showItemForm, setShowItemForm] = useState(false);
  const [availableItems, setAvailableItems] =
    useState<ItemType[]>(BREAKFAST_ITEMS);
  const [overallRating, setOverallRating] = useState(0);

  const addItem = (item: ItemType) => {
    setItems((prevItems) => [...prevItems, item]);
    removeAvailableItem(item);
  };

  const removeAvailableItem = (item: ItemType) => {
    setAvailableItems((prevItems) =>
      prevItems.filter((i) => i.value !== item.value)
    );
  };

  useEffect(() => {
    if (items.length > 0) {
      const totalRating = items.reduce((acc, item) => acc + item.rating!, 0);
      const overallRating = Math.round((totalRating / items.length) * 2) / 2;

      setOverallRating(overallRating);
    }
  }, [items]);

  return (
    <div>
      <div>{items.length > 0 && <ItemView items={items} />}</div>
      {showItemForm ? (
        <ItemForm
          addItem={addItem}
          availableItems={availableItems}
          setShowItemForm={setShowItemForm}
        />
      ) : (
        availableItems.length > 0 && (
          <button className="btn" onClick={() => setShowItemForm(true)}>
            Add Item
          </button>
        )
      )}
      <div>
        <RatingStars
          name="overallRating"
          label={"Overall Rating:"}
          setStars={setOverallRating}
          stars={overallRating}
        />
      </div>
    </div>
  );
};

export default ItemsList;
