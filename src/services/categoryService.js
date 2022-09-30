import axios from "axios";
const url = process.env.REACT_APP_BASE_ENDPOINT + "/categories";

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(url + "/getall")
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};
