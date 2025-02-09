"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import RatingStars from "../components/RatingStars/RatingStars";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import UploadImage from "./UploadImage";
import DetailedReviewForm from "../components/DetailedReviewForm/DetailedReviewForm";
import { calculateAverageRating } from "../utility/ratingsUtil";

type FormValues = {
  comment: string;
  rating: string;
  imageId: string;
};

interface Props {
  selectedPlaceId: string;
  reviewType: "basic" | "detailed";
}

interface ReviewSubmitData {
  comment: string;
  rating: number;
  imageId: string;
  placeId: string;
  type: "basic" | "detailed";
  userEmail: string;
  date: string;
}

const ReviewForm = ({ selectedPlaceId, reviewType }: Props) => {
  const { status, data: session } = useSession();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: { comment: "", rating: "0", imageId: "" },
  });

  const formValues = watch();

  const newReviewMutation = useMutation({
    mutationFn: (newReviewData: ReviewSubmitData) =>
      axios.post("/api/reviews", newReviewData),
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log("data", data);

    const rating =
      reviewType === "basic" ? data.rating : calculateAverageRating(data);

    if (session?.user?.email) {
      newReviewMutation.mutate({
        ...data,
        rating: Number(rating),
        placeId: selectedPlaceId,
        type: reviewType,
        userEmail: session?.user?.email, // Add a default value for userId
        imageId: data.imageId,
        date: new Date().toISOString(),
      });
    }
  });

  return (
    <form onSubmit={onSubmit}>
      {reviewType === "basic" ? (
        <>
          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <RatingStars
                name="rating"
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
        </>
      ) : (
        <DetailedReviewForm control={control} formValues={formValues} />
      )}

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
