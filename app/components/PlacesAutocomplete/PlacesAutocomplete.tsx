"use client";
import React, { useEffect } from "react";
import {
  getPlaceByGoogleId,
  createPlace,
  updatePlace,
} from "../../lib/places/placesApi";

interface Props {
  setSelectedPlace: (placeId: any | undefined) => void;
}

/**
 * This function retrieves the details of a place by its Google ID.
 * If the place is found, it updates the place with the new details.
 * If the place is not found (i.e., the server returns a 404 error with a message 'place not found'),
 * it creates a new place with the given details.
 * @param googlePlace The place object from Google Places API.
 * @returns The updated or newly created place.
 */
const getPlaceDetails = async (googlePlace: any) => {
  const newPlace: Place = {
    googleId: googlePlace.place_id,
    name: googlePlace.name,
    address: googlePlace.formatted_address,
    googleRating: googlePlace.rating,
    image: googlePlace.photos ? googlePlace.photos[0].getUrl() : null,
  };

  try {
    const data = await getPlaceByGoogleId(googlePlace.place_id);
    if (data.id) {
      return await updatePlace({ ...newPlace, id: data.id });
    }
  } catch (error: any) {
    if (
      error.response &&
      error.response.status === 404 &&
      error.response.data.error === "place not found"
    ) {
      // If the place is not found, create a new one
      return await createPlace(newPlace);
    } else {
      throw error;
    }
  }

  return newPlace;
};

function PlacesAutocomplete({ setSelectedPlace }: Props) {
  useEffect(() => {
    const loadGoogleMaps = async () => {
      const { Loader } = await import("@googlemaps/js-api-loader");

      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: "weekly",
        libraries: ["places"],
      });

      await loader.load();

      const input = document.getElementById("search-input") as HTMLInputElement;

      if (!input) {
        throw new Error("Input element not found");
      }

      navigator.geolocation.getCurrentPosition(function (position) {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const defaultBounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(userLocation.lat, userLocation.lng)
        );

        const autocomplete = new google.maps.places.Autocomplete(input, {
          bounds: defaultBounds,
          types: ["establishment"],
        });

        autocomplete.addListener("place_changed", async () => {
          const googlePlace = autocomplete.getPlace();

          const place = await getPlaceDetails(googlePlace);

          setSelectedPlace(place);
        });
      });
    };

    loadGoogleMaps();
  }, []);

  return (
    <label className="form-control w-full max-w-xs mb-2">
      <div className="label">
        <span className="label-text">Where did you eat?</span>
      </div>
      <input
        className="input input-bordered w-full max-w-xs"
        id="search-input"
      />
    </label>
  );
}

export default PlacesAutocomplete;
