import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchMessages = async (userId, senderId) => {
  try {
    const response = await axios.get(
      `${API_URL}/messages/${userId}/${senderId}`
    );
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
