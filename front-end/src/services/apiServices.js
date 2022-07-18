import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

const http = {
  getProducts: async ({ token }) => {
    try {
      const response = await api.get('/products',
        {
          headers: {
            authorization: token },
        });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  findUser: async ({ email, password }) => {
    try {
      const response = await api.post('/login', { email, password });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  createUser: async ({ name, email, password }) => {
    try {
      const response = await api.post('/register', { name, email, password });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  createUserAdmin: async ({ name, email, password, role, token }) => {
    try {
      const response = await api.post('/create-user',
        { name, email, password, role },
        {
          headers: { authorization: token },
        });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  getSales: async ({ token, role, email }) => {
    try {
      const response = await api.get('/sales',
        { headers: { authorization: token, data: JSON.stringify({ role, email }) } });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  getSalesById: async (token, id) => {
    try {
      const response = await api.get(`/sales/${id}`, {
        headers: {
          authorization: token },
      });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  getAllUsers: async () => {
    try {
      const response = await api.get('/users');
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  tokenGenerator: async ({ email, password }) => {
    try {
      const response = await api.post('/token', { email, password });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  deleteUser: async ({ id, token }) => {
    try {
      const response = await api.delete('/delete-user',
        {
          data: { id },
          headers: { authorization: token },
        });
      return response.data;
    } catch (error) {
      return error;
    }
  },
  getAllSellers: async () => {
    try {
      const response = await api.get('/users/sellers');
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  postSale: async ({ values, email, token, products }) => {
    try {
      const response = await api.post('/sales',
        { values, email, products },
        {
          headers: { authorization: token },
        });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
};
export default http;
