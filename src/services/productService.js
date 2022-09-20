import axios from "axios";
const url = "http://localhost:8080/api/products";

export const getProducts = async () => {
  const { data } = await axios.get(url + "/getall");
  return data.data;
};
