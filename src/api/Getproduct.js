import axios from "axios";
import { url_product_by_id } from "../utils/Constants";
export const getProduct = async (id) => {
  try {
    const url = `${url_product_by_id}${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};
