import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const createSession = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getProducts = async () => {
  try {
    const response = await api.get('/customer/products');
    return response;
  } catch (error) {
    return error.response;
  }
};
