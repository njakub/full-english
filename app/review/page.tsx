"use client";
import React from "react";
import ReviewForm from "./ReviewForm";
import PlacesAutocomplete from "../components/PlacesAutocomplete/PlacesAutocomplete";
import ReviewType from "./ReviewType";
import ItemList from "../components/ItemRating/ItemList";
import PlaceDetailsCard from "../components/PlaceDetailsCard/PlaceDetailsCard";

const RatePage = () => {
  const [selectedPlace, setSelectedPlace] = React.useState<any | undefined>(
    null
  );
  const [reviewType, setReviewType] = React.useState<"basic" | "detailed">(
    "basic"
  );

  return (
    <>
      <ReviewType reviewType={reviewType} setReviewType={setReviewType} />
      <PlacesAutocomplete setSelectedPlace={setSelectedPlace} />
      {selectedPlace && (
        <>
          <PlaceDetailsCard place={selectedPlace} />
          <ReviewForm
            selectedPlaceId={selectedPlace.place_id}
            reviewType={reviewType}
          />
        </>
      )}
      {reviewType === "detailed" && <ItemList />}
    </>
  );
};

export default RatePage;
