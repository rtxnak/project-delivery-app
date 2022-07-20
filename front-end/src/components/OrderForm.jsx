import React from 'react';
import OrderCard from './cards/orders/OrdersCard';
import NavBar from './navBar/NavBar';

function OrderForms() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <OrderCard />
    </div>
  );
}

export default OrderForms;
