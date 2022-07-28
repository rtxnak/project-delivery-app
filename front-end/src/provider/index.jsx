import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';
import { requestProdutos, requestSellers } from '../services/requestAPI';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsForStorage, setproductsForStorage] = useState([]);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    async function fetchInDB() {
      const requestAllProducts = await requestProdutos('/products');
      setProducts(requestAllProducts);
      const requestAllSellers = await requestSellers('/sellers');
      setSellers(requestAllSellers);
    }
    fetchInDB();
  }, []);

  const contextValue = {
    products,
    totalPrice,
    setTotalPrice,
    productsForStorage,
    setproductsForStorage,
    sellers,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
