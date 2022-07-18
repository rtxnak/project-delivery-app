import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

export default function Header() {
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  const user = localStorage.getItem('name');
  const role = localStorage.getItem('role')

  return (
    <header className="header">
      <button
        className="logoutBtn"
        type="button"
        onClick={ handleLogout }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
      <div
        className="divUserName"
        value={ user }
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user}
      </div>
      <div
        className=""
        data-testid="customer_products__element-navbar-user-full-name"
      >
      </div>
    </header>
  );
}
