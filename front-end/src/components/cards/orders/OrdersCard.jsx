import React, { useEffect, useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { requestOrder } from '../../../services/requestAPI';
import RequestOrderBox from '../../boxes/orders/RequestOrderBox';
import StatusOrderbox from '../../boxes/orders/StatusOrderBox';
import {
  testOrderId,
  testOrderStatus,
  testOrderDate,
  testOrderTotalPrice,
  testOrderAdress,
} from '../../../utils/OrderTestIds';

function OrderCard() {
  const [orders, setOrders] = useState();
  const [footer, setFooter] = useState(true);
  const { id, role } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const requestApi = async () => {
      const request = await requestOrder(
        'seller/orders', id,
      );
      const { salesResult } = request;
      setOrders(salesResult);
      if (role === 'seller') {
        setFooter(false);
      }
    };
    requestApi();
  }, [id, role]);

  return (
    <div
      className="content"
      id="detail-content"
    >
      {orders && orders.map((
        {
          id: numeroDoPedido,
          totalPrice: precoTotal,
          deliveryAddress: enderecoDeEntrega,
          deliveryNumber: numeroDoEndereco,
          saleDate: dataDaVenda,
          status: statusDeVenda,
        },
      ) => (
        <div
          key={ numeroDoPedido }
        >
          <a
            className="column"
            as={ ReactLink }
            href={ `/${role}/orders/${numeroDoPedido}` }
          >
            <div>
              <RequestOrderBox
                role={ role }
                conteudo={ { numeroDoPedido } }
                testId={ { testOrderId } }
              />
              <div
                className="column"
                id="col-order-inside"
              >
                <StatusOrderbox
                  role={ role }
                  conteudo={ {
                    numeroDoPedido,
                    precoTotal,
                    enderecoDeEntrega,
                    numeroDoEndereco,
                    dataDaVenda,
                    statusDeVenda,
                  } }
                  testId={ {
                    testOrderId,
                    testOrderStatus,
                    testOrderDate,
                    testOrderTotalPrice,
                    testOrderAdress,
                  } }
                  haveFooter={ footer }
                />
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default OrderCard;
