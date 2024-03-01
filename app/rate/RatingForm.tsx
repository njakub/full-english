"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm, Resolver, Controller } from "react-hook-form";
import RatingStars from "../components/RatingStars/RatingStars";

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
    control,
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

      <Controller
        name="rating"
        control={control}
        defaultValue={"0"}
        render={({ field }) => (
          <RatingStars
            stars={parseFloat(field.value)}
            setStars={field.onChange}
          />
        )}
      />

      <button type="submit" className="btn btn-accent mt-2">
        Submit
      </button>
    </form>
  );
};

export default RatingForm;
