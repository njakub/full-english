"use client";
import React from "react";
import RatingForm from "./RatingForm";
import PlacesAutocomplete from "../components/PlacesAutocomplete/PlacesAutocomplete";
import RatingType from "./RatingType";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const RatePage = () => {
  const [selectedPlaceId, setSelectedPlaceId] = React.useState<
    string | undefined
  >("");
  const [ratingType, setRatingType] = React.useState<"basic" | "detailed">(
    "basic"
  );

  return (
    <>
      <RatingType ratingType={ratingType} setRatingType={setRatingType} />
      <PlacesAutocomplete setSelectedPlaceId={setSelectedPlaceId} />
      {selectedPlaceId && (
        <RatingForm selectedPlaceId={selectedPlaceId} ratingType={ratingType} />
      )}
    </>
  );
};

export default RatePage;
