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

    const loggedUser = response.data.user;
    // eslint-disable-next-line
    const token = response.data.token;

    localStorage.setItem('user', JSON.stringify(loggedUser));
    localStorage.setItem('token', token);

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser({ loggedUser });
    if (response.data.role === 'customer') {
      navigate('/customer');
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
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate('/' && '/login');
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
