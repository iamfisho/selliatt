import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const signup = async (username) => {
  try {
    const response = await axios.post(`${API_URL}/user`, {username});
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const activeUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/user`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
}