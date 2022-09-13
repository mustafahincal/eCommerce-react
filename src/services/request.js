import axios from "axios";

const getRequest = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

const postRequest = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, data)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export const get = (url) => getRequest(url);
export const post = (url, data) => postRequest(url, data);
