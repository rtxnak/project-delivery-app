import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { api, createSession } from '../services/api';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password);
    const { name, token, role, id } = response.data;
    const loggedUser = name;
    const validToken = token;
    const validRole = role;
    const validId = id;

    localStorage.setItem('name', JSON.stringify(loggedUser));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('role', JSON.stringify(validRole));
    localStorage.setItem('token', token);
    localStorage.setItem('id', validId);

    api.defaults.headers.Authorization = `Bearer ${validToken}`;
    setUser({ loggedUser });
    if (response.data.role === 'customer') {
      navigate('/customer/products');
    }
    if (response.data.role === 'administrator') {
      navigate('/admin/manage');
    }
    if (response.data.role === 'seller') {
      navigate('/seller');
    }
  };

  const logOut = () => {
    console.log('logout');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate('/');
  };
  return (
    <AuthContext.Provider
      value={ { authenticated: !!user, user, loading, login, logOut,
      } }
    >
      { children }
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
