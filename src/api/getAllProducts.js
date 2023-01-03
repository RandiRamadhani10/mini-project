import axios from "axios";
import { url_products } from "../utils/Constants";
export const getAllProduct = async () => {
  try {
    const response = await axios.get(url_products);
    return response.data;
  } catch (error) {
    return error;
  }
};
