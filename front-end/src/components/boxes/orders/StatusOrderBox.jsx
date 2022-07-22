import React from 'react';
import PropTypes from 'prop-types';
import OrderText from '../../text/orders/OrdersText';
import OrdersFooterText from '../../text/orders/OrdersFooterText';

function StatusOrderbox({ role, conteudo, testId, haveFooter }) {
  const handleBackGround = () => {
    if (conteudo.statusDeVenda === 'Pendente') {
      return 'red';
    }
    if (conteudo.statusDeVenda === 'Preparando') {
      return 'orange';
    }
    if (conteudo.statusDeVenda === 'Em Trânsito') {
      return 'green';
    }
    if (conteudo.statusDeVenda === 'Entregue') {
      return 'blue';
    }
  };

  return (
    <div className="teste">
      <div>
        <div
          className="div-status"
          style={ { backgroundColor: handleBackGround() } }
        >
          <OrderText
            role={ role }
            conteudo={ conteudo.statusDeVenda }
            testId={ testId.testOrderStatus }
            orderId={ conteudo.numeroDoPedido }
          />
        </div>
        <div>
          <OrderText
            role={ role }
            conteudo={ new Date(conteudo.dataDaVenda).toLocaleDateString('pt-BR') }
            testId={ testId.testOrderDate }
            orderId={ conteudo.numeroDoPedido }
          />
          <div>
            <div className="infoPedidos">
              Valor:
            </div>
            <OrderText
              role={ role }
              conteudo={ conteudo.precoTotal.toString().replace('.', ',') }
              testId={ testId.testOrderTotalPrice }
              orderId={ conteudo.numeroDoPedido }
            />
          </div>
        </div>
      </div>
      {
        haveFooter
          ? null
          : (
            <OrdersFooterText
              role={ role }
              conteudo={ conteudo }
              testId={ testId.testOrderAdress }
              orderId={ conteudo.numeroDoPedido }
            />
          )
      }
    </div>
  );
}

StatusOrderbox.propTypes = {
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
  haveFooter: PropTypes.bool.isRequired,
};

export default StatusOrderbox;
