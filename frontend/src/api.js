import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchHeadlinesAPI = async (category, country, page, limit) => {
  const response = await axios.get(
    `${API_BASE_URL}/headlines?category=${category}&country=${country}&page=${page}&limit=${limit}`
  );
  return response.data;
};

export const searchArticlesAPI = async (query, page, limit) => {
  const response = await axios.get(
    `${API_BASE_URL}/search?q=${query}&page=${page}&limit=${limit}`
  );
  return response.data;
};
