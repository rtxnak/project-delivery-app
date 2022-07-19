import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;

  return (
    <div>
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
      <div
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      >
        {urlImage}
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;
