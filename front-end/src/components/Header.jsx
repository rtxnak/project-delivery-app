import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import NavBar from './NavBar';

export default function Header() {
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  const user = localStorage.getItem('name');
  const role = localStorage.getItem('role');

  return (
    <header id="header" className="columns">
      <div id="role" className="column">
        <NavBar
          role={ role }
        />
      </div>
      <div className="column" />
      <div
        id="divUserName"
        className="column"
        value={ user.replaceAll('"', '') }
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { user.replaceAll('"', '') }
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
