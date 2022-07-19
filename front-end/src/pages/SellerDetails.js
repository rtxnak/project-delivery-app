import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import http from '../services/apiServices';
import dataTestIds from '../utils/dataTestIds';
import { TableDetails, Header } from '../components';

// import '../styles/detailsPage.css';

const SellerOrders = () => {
  const [loading, setLoading] = useState(true);
  const [saleProducts, setSaleProducts] = useState({});
  const { saleDate, status, totalPrice } = saleProducts;

  const date = moment(Date.parse(saleDate)).format('DD/MM/YYYY');
  const statusColor = {
    Pendente: '#f9bd59',
    Preparando: '#f45757',
    Entregue: '#0aa050',
  };

  const orderStatus = {
    prepOrder: 'PREPARAR PEDIDO',
    outForDelivery: 'SAIU PARA ENTREGA',
  };

  const { prepOrder, outForDelivery } = orderStatus;

  const { id } = useParams();

  const getUserData = () => JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const getSales = async () => {
      const { token } = await getUserData();
      const saleProductsList = await http.getSalesById(token, id);
      setSaleProducts(saleProductsList);

      setLoading(false);
    };

    getSales();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div className="content">
      <Header />
      <div className="container-seller-customer-details">
        <div className="order-details">
          <div
            className="details-id"
            data-testid={ dataTestIds[54] }
          >
            { `Pedido ${id}` }
          </div>
          <div className="details-date" data-testid={ dataTestIds[56] }>{ date }</div>
          <div
            className="details-status"
            style={ { backgroundColor:
              status === 'Em Trânsito' ? '#ac203d' : statusColor[status] } }
            data-testid={ dataTestIds[55] }
          >
            { status }
          </div>
          <button className="change-status" type="button" data-testid={ dataTestIds[57] }>
            { prepOrder }
          </button>
          <button
            className="change-status"
            type="button"
            disabled
            data-testid={ dataTestIds[58] }
          >
            { outForDelivery }
          </button>
        </div>
        <div>
          <TableDetails saleProducts={ saleProducts } />
          <div className="details-total-price">
            <span>Total: R$</span>
            <span data-testid={ dataTestIds[64] }>{totalPrice.replace('.', ',')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerOrders;
