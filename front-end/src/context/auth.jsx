import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { api, createSession } from '../services/api';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItens, setCartItens] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const newTotalPrice = cartItens.reduce((acc, curr) => (
      acc + Number(curr.quantity) * Number(curr.price)), 0);
    setTotalPrice(newTotalPrice);
  }, [cartItens]);

  const login = async (email, password) => {
    const response = await createSession(email, password);
    const { name, token, role, id } = response.data;

    const userObj = {
      id,
      name,
      email,
      role,
      token,
    };

    localStorage.setItem('user', JSON.stringify(userObj));
    const loggedUser = name;
    const validToken = token;

    api.defaults.headers.Authorization = `Bearer ${validToken}`;
    setUser({ loggedUser });
    if (response.data.role === 'customer') {
      navigate('/customer/products');
    }
    if (response.data.role === 'administrator') {
      navigate('/admin/manage');
    }
    if (response.data.role === 'seller') {
      navigate('/seller/orders');
    }
    if (!response.data.role) {
      return response.status;
    }
  };

  const logOut = () => {
    console.log('logout');
    localStorage.removeItem('user');
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate('/');
  };

  const saveProductOnCart = (item) => {
    const itemFiltered = cartItens.filter(({ id }) => id !== item.id);
    setCartItens([...itemFiltered, item]);
  };

  return (
    <AuthContext.Provider
      value={ {
        authenticated: !!user,
        user,
        loading,
        login,
        logOut,
        saveProductOnCart,
        totalPrice,
        cartItens,
        setCartItens,
      } }
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
