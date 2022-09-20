import axios from "axios";

const getRequest = async (url) => {
  const { data } = await axios.get(url);
  return data.data;
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
