import axios from "axios";

const URL = "/api/places";

export const getPlaceByGoogleId = async (googleId: string) => {
  const { data } = await axios.get(`${URL}/google/${googleId}`);
  return data;
};

export const getPlaceById = async (id: string) => {
  const { data } = await axios.get(`${URL}/${id}`);
  return data;
};

export const createPlace = async (newPlace: Place) => {
  const { data } = await axios.post(URL, newPlace);
  return data;
};

export const updatePlace = async (place: Place) => {
  const { data } = await axios.put(`${URL}/${place.id}`, place);
  return data;
};

export const deletePlace = async (id: number) => {
  const { data } = await axios.delete(`${URL}/${id}`);
  return data;
};
