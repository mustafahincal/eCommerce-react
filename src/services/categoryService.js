import axios from "axios";
const url = "http://localhost:8080/api/categories";

export const getCategories = async () => {
  const { data } = await axios.get(url + "/getall");
  return data.data;
};
