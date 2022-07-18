import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';

import testId from '../utils/dataTestIds';

const SELLER_URL = '/seller/orders';

const CardOrders = ({ sale }) => {
  const { id, status, saleDate, totalPrice, deliveryNumber, deliveryAddress } = sale;
  const location = useLocation();

  const date = moment(Date.parse(saleDate)).format('DD/MM/YYYY');
  const address = `${deliveryAddress}, ${deliveryNumber}`;
  const price = totalPrice.replace('.', ',');
  const statusColor = {
    Pendente: '#f9bd59',
    Preparando: '#f45757',
    Entregue: '#0aa050',
  };

  const navigate = useNavigate();

  if (location.pathname === SELLER_URL) {
    return (
      <button
        className="card-order"
        type="button"
        onClick={ () => navigate(`/seller/orders/${id}`) }
      >
        <div
          className="status"
          data-testid={ `${testId[49]}${id}` }
          style={ { backgroundColor:
            status === 'Em Trânsito' ? '#ac203d' : statusColor[status] } }
        >
          { status }
        </div>
        <div className="container-data-address">
          <div className="container-data">
            <div className="order">
              <span>Pedido</span>
              <span
                className="order-id"
                data-testid={ `${testId[48]}${id}` }
              >
                { id }
              </span>
            </div>
            <div className="date-price">
              <div className="date" data-testid={ `${testId[50]}${id}` }>{ date }</div>
              <div className="price" data-testid={ `${testId[51]}${id}` }>{ price }</div>
            </div>
          </div>
          <div className="address" data-testid={ `${testId[52]}${id}` }>{ address }</div>
        </div>
      </button>
    );
  }

  return (
    <button
      className="card-order"
      type="button"
      onClick={ () => navigate(`/customer/orders/${id}`) }
    >
      <div
        className="status"
        data-testid={ `${testId[34]}${id}` }
        style={ { backgroundColor:
          status === 'Em Trânsito' ? '#f45757' : statusColor[status] } }
      >
        { status }
      </div>
      <div className="container-data">
        <div className="order">
          <span>Pedido</span>
          <span className="order-id" data-testid={ `${testId[33]}${id}` }>{ id }</span>
        </div>
        <div className="date-price">
          <div className="date" data-testid={ `${testId[35]}${id}` }>{ date }</div>
          <div className="price" data-testid={ `${testId[36]}${id}` }>{ price }</div>
        </div>
      </div>
    </button>
  );
};

CardOrders.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardOrders;
