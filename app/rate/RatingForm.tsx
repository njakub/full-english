"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm, Resolver, Controller } from "react-hook-form";
import RatingStars from "../components/RatingStars/RatingStars";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type FormValues = {
  comment: string;
  rating: string;
};

interface Props {
  selectedPlaceId: string;
  ratingType: "basic" | "detailed";
}

interface Rating {
  placeId: string;
  type: "basic" | "detailed";
  userEmail: string;
  comment: string;
  rating: number;
}

const RatingForm = ({ selectedPlaceId, ratingType }: Props) => {
  const { status, data: session } = useSession();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({});

  const newRatingMutation = useMutation({
    mutationFn: (newRatingData: Rating) =>
      axios.post("/api/ratings", newRatingData),
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (session?.user?.email) {
      newRatingMutation.mutate({
        ...data,
        rating: Number(data.rating),
        placeId: selectedPlaceId,
        type: ratingType,
        userEmail: session?.user?.email, // Add a default value for userId
      });
    }
  });

  return (
    <form onSubmit={onSubmit}>
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

      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Care to elaborate?</span>
        </div>
        <textarea
          className="textarea textarea-bordered w-full max-w-xs "
          {...register("comment")}
          placeholder="Comment"
        ></textarea>
      </label>

      <div className="flex justify-center">
        <button type="submit" className="btn btn-accent mt-2">
          Submit Rating
        </button>
      </div>
    </form>
  );
};

export default RatingForm;
