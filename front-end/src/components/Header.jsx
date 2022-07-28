import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import NavBar from './NavBar';

export default function Header() {
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <header id="header" className="columns">
      <div id="products" className="column">
        { user.role === 'customer' && (
          <NavBar
            title="PRODUTOS"
            testId="customer_products__element-navbar-link-products"
            link="/customer/products"
          />
        ) }
        { user.role === 'seller' && (
          <NavBar
            title="PEDIDOS"
            testId="customer_products__element-navbar-link-orders"
            link="/seller/orders"
          />
        ) }
        { user.role === 'administrator' && (
          <NavBar
            title="GERENCIAR USUÁRIOS"
            testId="administrator__element-navbar-link-orders"
            link="/administrator/orders"
          />
        ) }
      </div>
      <div
        className="column"
        id="cart"
      >
        { user.role === 'customer' && (
          <NavBar
            title="MEUS PEDIDOS"
            testId="customer_products__element-navbar-link-orders"
            link="/customer/orders"
          />
        ) }
      </div>
      <div
        id="divUserName"
        className="column"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { user.name }
      </div>
      <button
        id="logoutBtn"
        className="column is-one-fifth"
        type="button"
        onClick={ handleLogout }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </header>
  );
}
