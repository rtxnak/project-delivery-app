import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { AuthProvider, AuthContext } from '../context/auth';

import AddUser from '../pages/AddUser';
import Login from '../pages/Login';
import Customer from '../pages/Customer';
import Admin from '../pages/Admin';
import Seller from '../pages/Seller';

export default function Rotas() {
  // eslint-disable-next-line
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

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={ <Login /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/register" element={ <AddUser /> } />
          <Route exact path="/customer" element={ <Private><Customer /></Private> } />
          <Route exact path="/admin/manage" element={ <Private><Admin /></Private> } />
          <Route exact path="/seller" element={ <Private><Seller /></Private> } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
