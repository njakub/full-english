"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  comment: string;
  rating: string;
};

interface Props {
  selectedPlaceId: string;
  ratingType: "basic" | "detailed";
}

const RatingForm = ({ selectedPlaceId, ratingType }: Props) => {
  const { status, data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});

  async function postRating(data: any) {
    console.log("sending:", data);
    try {
      const response = await fetch("http://localhost:3000/api/ratings", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const onSubmit = handleSubmit((data) =>
    postRating({
      ...data,
      placeId: selectedPlaceId,
      type: ratingType,
      userEmail: session?.user?.email, // Add a default value for userId
    })
  );
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="textarea textarea-bordered mt-2"
        {...register("comment")}
        placeholder="Comment"
      ></textarea>

      <input
        type="number"
        className="input input-bordered w-full max-w-xs mt-2"
        {...register("rating")}
        placeholder="Rating"
      />

      <button type="submit" className="btn btn-accent mt-2">
        Submit
      </button>
    </form>
  );
};

export default RatingForm;
