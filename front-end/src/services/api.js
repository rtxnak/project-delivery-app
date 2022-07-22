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

export const getAllSellers = async () => {
  try {
    const response = await api.get('/admin/manage');
    const users = response.data;
    const sellers = users.filter((u) => u.role === 'seller');
    return sellers;
  } catch (error) {
    return error.response;
  }
};

export const getCustomerOrderDetail = async (id) => {
  try {
    const response = await api.get(`customer/checkout/orders/${id}`);
    const order = response.data;
    return order;
  } catch (error) {
    return error.response;
  }
};

export const updateStatusCustomerOrder = async (id, status) => {
  try {
    const response = await api.put(`customer/checkout/orders/${id}`, { status });
    const order = response.data;
    return order;
  } catch (error) {
    return error.response;
  }
};

export const createNewSale = async (sale, token) => {
  try {
    const response = await api.post('/customer/checkout', sale, {
      headers: {
        Authorization: `${token}`,
      },
    });

    const order = response.data;
    return order;
  } catch (error) {
    return error.response;
  }
};
