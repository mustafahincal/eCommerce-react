import axios from "axios";
const url = process.env.REACT_APP_BASE_ENDPOINT + "/products";

console.log();

export const fetchProducts = async () => {
  const { data } = await axios.get(url + "/getall");
  return data.data;
};

export const fetchProductsByPageNo = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(url + "/getallbypage?pageNo=" + pageParam);
  return data.data;
};

export const fetchProductById = async (productId) => {
  const { data } = await axios.get(
    url + "/getbyproductid?productId=" + productId
  );
  return data.data;
};
