import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

export default function Seller() {
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <div>
      <button type="button" onClick={ handleLogout }>Logout</button>
    </div>
  );
}
