import axios from "axios";
import { get, post } from "./request";
const url = "http://localhost:8080/api";

export const getProducts = () => get(url + "/products/getall");
