import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const fetchExamples = () => {
  return axios.get(`${API_URL}/example`);
};

export const createExample = (data) => {
  return axios.post(`${API_URL}/example`, data);
};
