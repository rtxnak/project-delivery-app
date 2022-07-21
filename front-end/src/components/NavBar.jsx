import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar({ title, testId, link }) {
  return (
    <div id="nav-customer">
      <Link to={ link }>
        <button
          type="button"
          data-testid={ testId }
        >
          { title }
        </button>
      </Link>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
  testId: PropTypes.string,
  link: PropTypes.string,
}.isRequired;
