import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import AddUser from '../pages/AddUser';
import Login from '../pages/Login';
import Customer from '../pages/Customer';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/register" element={ <AddUser /> } />
        <Route exact path="/customer" element={ <Customer /> } />
      </Routes>
    </BrowserRouter>
  );
}
