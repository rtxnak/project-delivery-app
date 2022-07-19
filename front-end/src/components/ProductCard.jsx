import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;

  return (
    <div
      className="products-card"
    >
      <div
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {price}
      </div>
      <div
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </div>
      <img
        style={ { width: '100px' } }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
      />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;
