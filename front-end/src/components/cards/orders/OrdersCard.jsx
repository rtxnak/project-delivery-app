import React, { useEffect, useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';
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
    <div>
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
        <Box
          key={ numeroDoPedido }
          maxWidth="20em"
          margin="2em"
          border="0.2em solid"
          borderRadius="10px"
          borderColor="black.400"
        >
          <Link
            as={ ReactLink }
            to={ `/${role}/orders/${numeroDoPedido}` }
          >
            <Flex>
              <RequestOrderBox
                role={ role }
                conteudo={ { numeroDoPedido } }
                testId={ { testOrderId } }
              />
              <Flex className="infoPedidos">
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
              </Flex>
            </Flex>
          </Link>
        </Box>
      ))}
    </div>
  );
}

export default OrderCard;