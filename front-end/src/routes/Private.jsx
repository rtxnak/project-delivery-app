import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/auth';

const Private = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Carregando...</div>;
  }
  if (!authenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

Private.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Private;
