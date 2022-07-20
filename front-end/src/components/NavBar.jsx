import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar({ role }) {
  return (
    <Link to="/customer/products/orders">
      { role }
    </Link>
  );
}

NavBar.propTypes = {
  role: PropTypes.string,
  // path: PropTypes.string,
}.isRequired;
