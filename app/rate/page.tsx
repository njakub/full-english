"use client";
import React from "react";
import RatingForm from "./RatingForm";
import PlacesAutocomplete from "../components/PlacesAutocomplete/PlacesAutocomplete";
import RatingType from "./RatingType";

const RatePage = () => {
  const [selectedPlaceId, setSelectedPlaceId] = React.useState<
    string | undefined
  >("");
  const [ratingType, setRatingType] = React.useState<"basic" | "detailed">(
    "basic"
  );

  return (
    <>
      <h1>Rate Page</h1>
      <PlacesAutocomplete setSelectedPlaceId={setSelectedPlaceId} />
      <RatingType ratingType={ratingType} setRatingType={setRatingType} />
      {selectedPlaceId && (
        <RatingForm selectedPlaceId={selectedPlaceId} ratingType={ratingType} />
      )}
    </>
  );
};

export default RatePage;
