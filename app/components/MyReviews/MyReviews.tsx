import React, { useEffect, useState } from "react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { ReviewTable } from "./ReviewTable";

interface MyReviewsProps {
  reviews: Review[];
}

interface ReviewRow {
  placeName: string;
  rating: number;
  date: string;
  comment: string;
}

const columnHelper = createColumnHelper<ReviewRow>();

const columns = [
  columnHelper.accessor("placeName", {
    header: () => "Place",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("rating", {
    header: () => "Rating",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("date", {
    header: () => "Date",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("comment", {
    header: () => "Comment",
    cell: (info) => info.renderValue(),
  }),
] as ColumnDef<unknown, any>[];

const MyReviews = ({ reviews }: MyReviewsProps) => {
  const [data, setData] = useState<ReviewRow[]>(() => []);

  useEffect(() => {
    if (reviews.length > 0) {
      const mapReviews: ReviewRow[] = reviews.map((review) => ({
        placeName: review.place.name,
        rating: review.rating,
        date: review.date,
        comment: review.comment,
      }));
      setData(mapReviews);
    }
  }, [reviews]);

  return (
    <>
      <h1>My Reviews</h1>
      <ReviewTable
        {...{
          data,
          columns,
          canFilter: false,
        }}
      />
    </>
  );
};

export default MyReviews;
