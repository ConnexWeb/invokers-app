import axios from "axios";

const API_URL = "http://10.0.2.2:8082/card";

export const getCards = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
