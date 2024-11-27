import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchArticles = async () => {
  const response = await apiClient.get('/articles');
  return response.data;
};

export const fetchCategories = async () => {
  const response = await apiClient.get('/features-and-categories/categories');
  return response.data;
};

export const fetchFeatures = async () => {
  const response = await apiClient.get('/features-and-categories/features');
  return response.data;
};
