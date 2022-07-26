import React from 'react';
import PropTypes from 'prop-types';
import OrderText from '../../text/orders/OrdersText';

function RequestOrderBox({ role, conteudo, testId }) {
  return (
    <div>
      <div
        className="column"
        id="col-order-num"
      >
        <div>
          Pedido
        </div>
        <OrderText
          role={ role }
          conteudo={ conteudo.numeroDoPedido }
          testId={ testId.testOrderId }
          orderId={ conteudo.numeroDoPedido }
        />
      </div>
    </div>
  );
}

RequestOrderBox.propTypes = {
  role: PropTypes.string.isRequired,
  conteudo: PropTypes.shape({
    statusDeVenda: PropTypes.string,
    dataDaVenda: PropTypes.string,
    precoTotal: PropTypes.string,
    numeroDoPedido: PropTypes.number,
  }).isRequired,
  testId: PropTypes.objectOf(
    PropTypes.string,
  ).isRequired,
};

export default RequestOrderBox;
