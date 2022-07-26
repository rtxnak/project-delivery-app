import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import DetailTable from '../components/table/productDetail/TableDetails';
import OrderDetailContainer from '../components/boxes/orderDetails/OrderDetailContainer';
import { requestOrderDetails } from '../services/requestAPI';

function Details() {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const [order, setOrder] = useState({
    totalPrice: '',
    products: [],
  });
  const { id } = useParams();

  useEffect(() => {
    const requestApi = async () => {
      const request = await requestOrderDetails(
        `/sales/details/${id}`, token,
      );
      setOrder(request);
    };
    requestApi();
  }, [id, token]);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Flex
        as="main"
        flexDir="column"
      >
        <OrderDetailContainer />
        <DetailTable
          carrinho={ order }
        />
      </Flex>
    </div>
  );
}

export default Details;
