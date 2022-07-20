import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { AuthContext } from '../context/auth';

export default function Customer() {
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  const { totalPrice } = useContext(AuthContext);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const getProductsArray = async () => {
    const response = await getProducts();
    return setProducts(response.data);
  };

  const navigateToCheckout = () => {
    navigate('/customer/checkout');
  };

  useEffect(() => {
    getProductsArray();
  }, []);

  useEffect(() => {
    if (Number(totalPrice) > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [totalPrice]);

  return (
    <div>
      <Header />
      <div
        className="div-products-card"
      >
        {products && products.map((product) => (
          <ProductCard key={ product.id } product={ product } />
        ))}
      </div>
      <div>
        <button
          disabled={ buttonDisabled }
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ navigateToCheckout }
        >
          <span data-testid="customer_products__checkout-bottom-value">
            {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </button>
      </div>
    </div>
  );
}
