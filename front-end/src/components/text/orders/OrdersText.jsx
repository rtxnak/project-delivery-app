import React from 'react';
import PropTypes from 'prop-types';

function OrdersText({ role, testId, conteudo, orderId }) {
  return (
    <h1
      className="teste"
      data-testid={ `${role}${testId}${orderId}` }
    >
      { conteudo }
    </h1>
  );
}

OrdersText.propTypes = {
  role: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  conteudo: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  orderId: PropTypes.number.isRequired,
};

export default OrdersText;
