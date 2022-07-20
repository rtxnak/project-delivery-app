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
      <div id="role" className="column">
        <NavBar
          role={ user.role }
        />
      </div>
      <div className="column" />
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
