import axios from "axios";
import { useNavigate } from "react-router-dom";
import { refreshToken } from "./authService";

const url = process.env.REACT_APP_BASE_ENDPOINT + "/categories";

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(url + "/getall", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => resolve(response.data.data))
      .catch((error) => {
        if (error.response.status === 401) {
          refreshToken()
            .then((response) => {
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("refreshToken", response.data.refreshToken);
              localStorage.setItem("currentUserId", response.data.userId);
            })
            .catch((error) => {
              if (error.response.status === 401) {
              }
            });
        }
      });
  });
};
