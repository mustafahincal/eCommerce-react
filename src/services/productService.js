import axios from "axios";
const url = process.env.REACT_APP_BASE_ENDPOINT + "/products";

export const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(url + "/getall")
      .then((response) => resolve(response.data.data))
      .catch((error) => reject(error));
  });
};

export const fetchProductsByPageNo = ({ pageParam = 1 }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url + "/getallbypage?pageNo=" + pageParam)
      .then((response) => resolve(response.data.data))
      .catch((error) => reject(error));
  });
};

export const fetchProductById = (productId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url + "/getbyproductid?productId=" + productId)
      .then((response) => resolve(response.data.data))
      .catch((error) => reject(error));
  });
};
