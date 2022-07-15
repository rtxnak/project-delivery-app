import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { AuthProvider } from '../context/auth';
import Private from './Private';

import AddUser from '../pages/AddUser';
import Login from '../pages/Login';
import Customer from '../pages/Customer';
import Admin from '../pages/Admin';
import Seller from '../pages/Seller';

export default function Rotas() {
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
//
