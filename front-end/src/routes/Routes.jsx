import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { AuthProvider } from '../context/auth';
import Private from './Private';

import AddUser from '../pages/AddUser';
import Login from '../pages/Login';
import Customer from '../pages/CustomerProducts';
import Checkout from '../pages/CustomerCheckout';
import Admin from '../pages/Admin';
import Seller from '../pages/Seller';

export default function Rotas() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/register" element={ <AddUser /> } />
          <Route
            exact
            path="/customer/products"
            element={ <Private><Customer /></Private> }
          />
          <Route
            exact
            path="/customer/checkout"
            element={ <Private><Checkout /></Private> }
          />
          <Route exact path="/admin/manage" element={ <Private><Admin /></Private> } />
          <Route exact path="/seller" element={ <Private><Seller /></Private> } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
//
