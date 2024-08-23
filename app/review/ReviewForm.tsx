"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm, Resolver, Controller } from "react-hook-form";
import RatingStars from "../components/RatingStars/RatingStars";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import UploadImage from "./UploadImage";

type FormValues = {
  comment: string;
  rating: string;
  imageId: string;
};

interface Props {
  selectedPlaceId: string;
  reviewType: "basic" | "detailed";
}

interface Review {
  placeId: string;
  type: "basic" | "detailed";
  userEmail: string;
  comment: string;
  rating: number;
  imageId: string;
}

const ReviewForm = ({ selectedPlaceId, reviewType }: Props) => {
  const { status, data: session } = useSession();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: { comment: "", rating: "0", imageId: "" },
  });

  const newReviewMutation = useMutation({
    mutationFn: (newReviewData: Review) =>
      axios.post("/api/reviews", newReviewData),
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = handleSubmit((data) => {
    if (session?.user?.email) {
      newReviewMutation.mutate({
        ...data,
        rating: Number(data.rating),
        placeId: selectedPlaceId,
        type: reviewType,
        userEmail: session?.user?.email, // Add a default value for userId
        imageId: data.imageId,
      });
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Controller
        name="rating"
        control={control}
        render={({ field }) => (
          <RatingStars
            name="basicRating"
            stars={parseFloat(field.value)}
            setStars={field.onChange}
            label={""}
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

      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Let&apos;s see it...</span>
        </div>
        <Controller
          name="imageId"
          control={control}
          render={({ field }) => (
            <UploadImage imageId={field.value} setImageId={field.onChange} />
          )}
        />
      </label>

      <div className="flex justify-center">
        <button type="submit" className="btn btn-accent mt-2">
          Submit Review
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
