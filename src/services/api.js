import axios from 'axios';

const API_BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
