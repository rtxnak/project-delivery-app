import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerOrderDetail, updateStatusCustomerOrder } from '../services/api';
import Table from '../components/table/Table';
import Header from '../components/Header';
import {
  testOrderId,
  testSellerName,
  testOrderDate,
  testStatus,
} from '../utils/CustomerOrdersDetailsTestids';

function CustomerOrdersDetails() {
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
      const response = await getCustomerOrderDetail(id);
      setOrder(response);
      setStatus(response.status);
    };
    getOrder();
  }, [id]);

  const handleStatus = async () => {
    setStatus('Entregue');
    await updateStatusCustomerOrder(id, 'Entregue');
  };

  return (
    <div>
      <Header />
      <div className="content">
        <h1>Detalhe do Pedido</h1>
        {order && (
          <>
            <div
              style={ { display: 'flex' } }
            >
              <div
                data-testid={ testOrderId }
              >
                {`PEDIDO ${order.id}`}
              </div>
              <div
                data-testid={ testSellerName }
              >
                {`P.Vend ${order.seller.name}`}
              </div>
              <div
                data-testid={ testOrderDate }
              >
                {new Date(order.saleDate).toLocaleDateString('pt-BR')}
              </div>
              <div
                data-testid={ testStatus }
                style={ { color: 'green', fontSize: '50px' } }
              >
                {status}
              </div>
              <button
                type="button"
                disabled={ status !== 'Em Trânsito' }
                onClick={ () => handleStatus() }
                data-testid="customer_order_details__button-delivery-check"
              >
                MARCAR COMO ENTREGUE
              </button>
            </div>
            <Table
              productsInStore={ orderMap() }
              removeItenInListProducts={ () => console.log('') }
              idIndex="customer_order_details__element-order-table-item-number-"
              idName="customer_order_details__element-order-table-name-"
              idQuantity="customer_order_details__element-order-table-quantity-"
              idPrice="customer_order_details__element-order-table-unit-price-"
              idSubTotal="customer_order_details__element-order-table-sub-total-"
              idTotalPrice="customer_order_details__element-order-total-price"
              fullPrice={ Number(order.totalPrice) }
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CustomerOrdersDetails;
