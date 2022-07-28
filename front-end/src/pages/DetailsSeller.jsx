import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSellerOrderDetail, updateStatusSellerOrder } from '../services/api';
import Table from '../components/table/Table';
import Header from '../components/Header';
import {
  testOrderId,
  testOrderDate,
  testStatus,
} from '../utils/SellerOrdersDetailsTestids';

function SellerOrdersDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState();
  const [status, setStatus] = useState();

  const orderMap = () => order.products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: product.salesProducts.quantity,
  }));

  useEffect(() => {
    const getOrder = async () => {
      const response = await getSellerOrderDetail(id);
      setOrder(response);
      setStatus(response.status);
    };
    getOrder();
  }, [id]);

  const handleStatus = async (statusName) => {
    setStatus(statusName);
    await updateStatusSellerOrder(id, statusName);
  };

  return (
    <div>
      <Header />
      <h1
        id="h1-detail"
      >
        Detelhes do pedido
      </h1>
      <div
        className="content"
        id="detail-content"
      >
        {order && (
          <>
            <div
              className="columns"
              id="header-detail"
              style={ { display: 'flex' } }
            >
              <div
                className="column"
                data-testid={ testOrderId }
              >
                {`PEDIDO ${order.id}`}
              </div>
              <div
                className="column"
                data-testid={ testOrderDate }
              >
                {new Date(order.saleDate).toLocaleDateString('pt-BR')}
              </div>
              <div
                id="status-detail"
                className="column"
                data-testid={ testStatus }
              >
                {status}
              </div>
              <button
                id="btn-delivery"
                className="column"
                type="button"
                disabled={ status !== 'Pendente' }
                onClick={ () => handleStatus('Preparando') }
                data-testid="seller_order_details__button-preparing-check"
              >
                PREPARAR PEDIDO
              </button>
              <button
                id="btn-delivery"
                className="column"
                type="button"
                disabled={ status !== 'Preparando' }
                onClick={ () => handleStatus('Em Trânsito') }
                data-testid="seller_order_details__button-dispatch-check"
              >
                SAIU PARA ENTREGA
              </button>
            </div>
            <Table
              productsInStore={ orderMap() }
              removeItenInListProducts={ () => console.log('') }
              idIndex="seller_order_details__element-order-table-item-number-"
              idName="seller_order_details__element-order-table-name-"
              idQuantity="seller_order_details__element-order-table-quantity-"
              idPrice="seller_order_details__element-order-table-unit-price-"
              idSubTotal="seller_order_details__element-order-table-sub-total-"
              idTotalPrice="seller_order_details__element-order-total-price"
              fullPrice={ Number(order.totalPrice) }
            />
          </>
        )}
      </div>
    </div>
  );
}

export default SellerOrdersDetails;
