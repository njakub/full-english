interface PlaceProps {
  place: Place;
}

const PlaceDetailsCard = ({ place }: PlaceProps) => {
  return (
    <div className="card bg-base-100 w-4/5 shadow-xl inline-block">
      <figure>
        <img src={place.image ?? ""} alt="Missing Picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{place.name}</h2>
        <p>{place.address}</p>
      </div>
    </div>
  );
};

export default PlaceDetailsCard;
