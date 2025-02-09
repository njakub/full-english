import React from "react";
import { ItemType, BREAKFAST_ITEMS } from "./DetailedReview";
import Image from "next/image";
import StaticStars from "../RatingStars/StaticStars";

interface ItemViewProps {
  items: ItemType[];
}

const ItemView = ({ items }: ItemViewProps) => {
  return (
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
              <StaticStars stars={item.rating} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemView;
