import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

export default function Customer() {
  const [products, setProducts] = useState();

  const getProductsArray = async () => {
    const response = await getProducts();
    return setProducts(response.data);
  };

  useEffect(() => {
    getProductsArray();
  }, []);

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
    </div>
  );
}
