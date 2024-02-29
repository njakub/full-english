import React from "react";
import { Loader } from "@googlemaps/js-api-loader";
import PlacesAutocompleteWithMap from "../components/PlacesAutocompleteWithMap/PlacesAutocompleteWithMap";

const FindPage = () => {
  return (
    <>
      <h1>FindPage</h1>
      <PlacesAutocompleteWithMap />
    </>
  );
};

export default FindPage;
