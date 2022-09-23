import axios from "axios";
const url = process.env.REACT_APP_BASE_ENDPOINT + "/categories";

export const getCategories = async () => {
  const { data } = await axios.get(url + "/getall");
  return data.data;
};
