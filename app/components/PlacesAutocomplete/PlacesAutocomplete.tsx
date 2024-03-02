"use client";
import React, { useEffect } from "react";

interface Props {
  setSelectedPlaceId: (placeId: string | undefined) => void;
}

function PlacesAutocomplete({ setSelectedPlaceId }: Props) {
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

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          console.log(place);
          setSelectedPlaceId(place.place_id);
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
