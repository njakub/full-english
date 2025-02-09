import React, { useEffect, useState } from "react";
import ItemSelect from "../ItemSelect/ItemSelect";
import ItemRatingsList from "../ItemRatingsList/ItemRatingsList";
import { calculateAverageRating } from "@/app/utility/ratingsUtil";

interface DetailedReviewFormProps {
  control: any;
  formValues: any;
}

export const BREAKFAST_ITEMS: ItemOption[] = [
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

const DetailedReviewForm = ({
  control,
  formValues,
}: DetailedReviewFormProps) => {
  const [selectedItems, setSelectedItems] = useState<ItemOption[]>([]);
  const [availableItems, setAvailableItems] =
    useState<ItemOption[]>(BREAKFAST_ITEMS);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    if (formValues) {
      const avg = calculateAverageRating(formValues) ?? 0;
      setAverageRating(avg);
    }
  }, [formValues]);

  return (
    <div>
      <ItemRatingsList
        items={selectedItems}
        control={control}
        averageRating={averageRating}
      />
      {availableItems.length > 0 && (
        <ItemSelect
          setSelectedItems={setSelectedItems}
          selectedItems={selectedItems}
          setAvailableItems={setAvailableItems}
          availableItems={availableItems}
        />
      )}
    </div>
  );
};

export default DetailedReviewForm;
