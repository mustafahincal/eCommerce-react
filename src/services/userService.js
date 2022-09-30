import axios from "axios";
const url = process.env.REACT_APP_BASE_ENDPOINT + "/users";

export const fetchUserById = async (userId) => {
  try {
    const { data } = await axios.get(url + "/getbyid?id=" + userId);
    return data;
  } catch (error) {
    console.log(error);
  }
};
