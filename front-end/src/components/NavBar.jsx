import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar({ role }) {
  const wRole = role.replaceAll('"', '').toUpperCase();
  // console.log(wRole);
  return (
    <Link to="/customer/products/orders">
      { wRole }
    </Link>
  );
}

NavBar.propTypes = {
  role: PropTypes.string,
  // path: PropTypes.string,
}.isRequired;
