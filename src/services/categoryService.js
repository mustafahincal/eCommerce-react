import { get, post } from "./request";
const url = "http://localhost:8080/api";

export const getCategories = () => get(url + "/categories/getall");
