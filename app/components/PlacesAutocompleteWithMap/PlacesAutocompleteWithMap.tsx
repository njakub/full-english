"use client";
import React, { useEffect, useRef } from "react";

function PlacesAutocompleteWithMap() {
  const mapRef = useRef(null);

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

      const autocomplete = new google.maps.places.Autocomplete(input);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();

        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }

        const mapElement = mapRef.current;

        if (!mapElement) {
          return;
        }

        const map = new google.maps.Map(mapElement, {
          center: place.geometry.location,
          zoom: 17,
        });

        new google.maps.Marker({
          map,
          position: place.geometry.location,
        });

        console.log(place);
      });
    };

    loadGoogleMaps();
  }, []);

  return (
    <div className="h-screen">
      <input
        id="search-input"
        className="input input-bordered w-full max-w-xs mb-4"
      />
      <div
        ref={mapRef}
        className="w-full h-full sm:w-3/4 sm:h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3"
      ></div>
    </div>
  );
}

export default PlacesAutocompleteWithMap;
