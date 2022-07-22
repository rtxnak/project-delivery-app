import React from 'react';
import PropTypes from 'prop-types';

function OrdersFooterText({ role, conteudo, testId, orderId }) {
  return (
    <div
      data-testid={ `${role}${testId}${orderId}` }
    >
      { `${conteudo.enderecoDeEntrega},${conteudo.numeroDoEndereco}` }
    </div>
  );
}

OrdersFooterText.propTypes = {
  role: PropTypes.string.isRequired,
  conteudo: PropTypes.shape({
    enderecoDeEntrega: PropTypes.string,
    numeroDoEndereco: PropTypes.string,
  }).isRequired,
  testId: PropTypes.string.isRequired,
  orderId: PropTypes.number.isRequired,
};

export default OrdersFooterText;
