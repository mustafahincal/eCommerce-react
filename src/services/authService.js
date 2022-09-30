import axios from "axios";
const url = process.env.REACT_APP_BASE_ENDPOINT + "/auth";

export const fetchRegister = (userForRegister) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url + "/register", userForRegister)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export const fetchLogin = (userForLogin) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url + "/login", userForLogin)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
  // fetch(url + "/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(userForLogin),
  // })
  //   .then((result) => result.json())
  //   .then((result) => console.log(result))
  //   .catch((err) => console.log(err));
};
