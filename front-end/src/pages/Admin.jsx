import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

export default function Admin() {
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
