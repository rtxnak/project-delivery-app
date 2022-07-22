import React, { useContext, useState, useEffect } from 'react';
import Header from '../components/Header';
import { AuthContext } from '../context/auth';
import Table from '../components/table/Table';
import CheckoutInput from '../components/input/CheckoutInput';
import { getAllSellers } from '../services/api';
import ButtonFinalizar from '../components/button/finalizar/ButtonFinalizar';

export default function Checkout() {
  const { totalPrice, cartItens, setCartItens } = useContext(AuthContext);
  const [sellerSelected, setSellerSelected] = useState();
  const [userAddress, setUserAddress] = useState('');
  const [userNumberAddress, setUserNumberAddress] = useState('');
  const [sellers, setSellers] = useState([]);

  const getSellers = async () => {
    const allSellers = await getAllSellers();
    setSellers(allSellers);
    setSellerSelected(allSellers[0].id);
  };
  useEffect(() => {
    getSellers();
  }, []);

  const removeItemFromCart = (productCartId) => {
    const itemFiltered = cartItens.filter(({ id }) => id !== Number(productCartId));
    setCartItens(itemFiltered);
  };

  const productSalesArray = () => {
    const result = cartItens.map((itens) => ({
      productId: itens.id,
      quantity: itens.quantity,
    }));
    return result;
  };

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <Header />
      <div className="content">
        <h1>Finalizar Pedido</h1>
        <Table
          productsInStore={ cartItens }
          removeItenInListProducts={ removeItemFromCart }
          idIndex="customer_checkout__element-order-table-item-number-"
          idName="customer_checkout__element-order-table-name-"
          idQuantity="customer_checkout__element-order-table-quantity-"
          idPrice="customer_checkout__element-order-table-unit-price-"
          idSubTotal="customer_checkout__element-order-table-sub-total-"
          idTotalPrice="customer_checkout__element-order-total-price"
          fullPrice={ totalPrice }
        />
      </div>
      <div className="content">
        <h1>Detalhes e Endereço para Entrega</h1>
        {sellers && sellerSelected
          && <CheckoutInput
            allSellers={ sellers }
            sellerSelected={ sellerSelected }
            setSellerSelected={ setSellerSelected }
            userAddress={ userAddress }
            setUserAddress={ setUserAddress }
            userNumberAddress={ userNumberAddress }
            setNumberAddress={ setUserNumberAddress }
          />}
      </div>
      <div>
        <ButtonFinalizar
          title="Finalizar Pedido"
          testId="customer_checkout__button-submit-order"
          totalPrice={ totalPrice }
          sellerId={ sellerSelected }
          deliveryAddress={ userAddress }
          deliveryNumber={ userNumberAddress }
          userId={ user.id }
          productSalesArray={ productSalesArray() }
        />
      </div>
    </div>
  );
}
