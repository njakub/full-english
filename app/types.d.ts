interface Place {
  id?: number;
  googleId: string;
  name: string;
  address: string;
  googleRating: number;
  image: string | null;
  rating?: number;
}

interface Review {
  placeId: string;
  type: "basic" | "detailed";
  comment: string;
  rating: number;
  imageId: string;
  date: string;
  place: Place;
}
