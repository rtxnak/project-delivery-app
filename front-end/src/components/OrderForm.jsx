import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderCard from './cards/orders/OrdersCard';
import CustomerOrdersCard from './cards/orders/CustomerOrdersCard';
import Header from './Header';

function OrderForms() {
  const sellerPath = '/seller/orders';
  const location = useLocation();

  return (
    <div>
      <header>
        <Header />
      </header>
      {location.pathname === sellerPath ? (<OrderCard />) : (<CustomerOrdersCard />)}
    </div>
  );
}

export default OrderForms;
