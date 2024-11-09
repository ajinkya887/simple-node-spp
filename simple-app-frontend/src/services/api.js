import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const addUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users`, userData);
  return response.data;
};
