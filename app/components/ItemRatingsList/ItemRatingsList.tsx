import React from "react";
import Image from "next/image";
import RatingStars from "../RatingStars/RatingStars";
import StaticStars from "../RatingStars/StaticStars";
import { Controller } from "react-hook-form";

interface ItemRatingsListrops {
  items: ItemOption[];
  control: any;
  averageRating: number;
}

const ItemRatingsList = ({
  items,
  control,
  averageRating,
}: ItemRatingsListrops) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="flex items-center">
                <Image
                  src={`/icons/${item.value}.png`}
                  alt={item.value}
                  width={50}
                  height={50}
                />
                <span className="ml-1 mr-1">{item.label}</span>
              </td>
              <td>
                <Controller
                  name={`itemRating-${item.label}`}
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <RatingStars
                      name={field.name}
                      stars={field.value}
                      setStars={field.onChange}
                      size="half"
                    />
                  )}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {averageRating > 0 && (
        <label className="mt-2 flex items-center">
          <span>Rating: </span>
          <StaticStars stars={averageRating} />
        </label>
      )}
    </div>
  );
};

export default ItemRatingsList;
