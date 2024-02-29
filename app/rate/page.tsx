"use client";
import React from "react";
import RatingForm from "./RatingForm";
import PlacesAutocomplete from "../components/PlacesAutocomplete/PlacesAutocomplete";
import RatingType from "./RatingType";
import RatingStars from "../components/RatingStars/RatingStars";
const RatePage = () => {
  const [selectedPlaceId, setSelectedPlaceId] = React.useState<
    string | undefined
  >("");
  const [ratingType, setRatingType] = React.useState<"basic" | "detailed">(
    "basic"
  );
  const [stars, setStars] = React.useState<number>(0);
  console.log("stars", stars);

  return (
    <>
      <h1>Rate Page</h1>
      <PlacesAutocomplete setSelectedPlaceId={setSelectedPlaceId} />
      <RatingType ratingType={ratingType} setRatingType={setRatingType} />
      {/* <RatingStars stars={stars} setStars={setStars} /> */}
      {selectedPlaceId && (
        <RatingForm selectedPlaceId={selectedPlaceId} ratingType={ratingType} />
      )}
    </>
  );
};

export default RatePage;
