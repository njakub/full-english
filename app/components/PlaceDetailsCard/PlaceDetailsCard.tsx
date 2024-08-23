import React from "react";

interface PlaceProps {
  place: any;
}

interface Place {
  id: string;
  name: string;
  address: string;
  rating: number;
  googleRating: number;
  image: string;
}

const PlaceDetailsCard = ({ place }: PlaceProps) => {
  console.log("PlaceDetailsCard", place);
  //Display Name
  //Display Image
  //Display address
  //Display ratings

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={place.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{place.name}</h2>
        <p>{place.address}</p>
      </div>
    </div>
  );
};

export default PlaceDetailsCard;
