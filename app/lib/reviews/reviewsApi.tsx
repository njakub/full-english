import axios from "axios";

const URL = "/api/reviews";

export const getReviewsByEmail = async (email: string) => {
  const { data } = await axios.get(`${URL}/user/${email}`);
  return data;
};
