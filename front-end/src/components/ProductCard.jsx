import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
// import { OrderCartContext } from '../context/orderCart';
import { AuthContext } from '../context/auth';

export default function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;
  const { saveProductOnCart } = useContext(AuthContext);

  const [nameState, setName] = useState('');
  const [idState, setId] = useState(null);
  const [priceState, setPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

  useEffect(() => {
    setName(name);
    setId(id);
    setPrice(price);
  }, [id, name, price]);

  const quantityChange = (type) => {
    setName(name);
    setId(id);
    setPrice(price);
    if (type === 'plus') {
      const newQuantity = productQuantity + 1;
      setProductQuantity(newQuantity);
      const item = {
        name: nameState,
        id: idState,
        price: priceState,
        quantity: newQuantity,
      };
      saveProductOnCart(item);
    }
    if (type === 'minus' && productQuantity > 0) {
      const newQuantity = productQuantity - 1;
      setProductQuantity(newQuantity);
      const item = {
        name: nameState,
        id: idState,
        price: priceState,
        quantity: newQuantity,
      };
      saveProductOnCart(item);
    }
  };

  return (
    <div
      className="products-card"
    >
      <div
        className="divPriceProduct"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {price.replace('.', ',')}
      </div>
      <div className="divImg">
        <img
          alt={ name }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
        />
      </div>
      <div
        className="products-box-name"
      >
        <div
          className="divProductName"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </div>
        <div>
          <button
            className="button is-primary"
            type="button"
            onClick={ () => { quantityChange('plus'); } }
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            +
          </button>
          <input
            className="inputQnt"
            // type="number"
            readOnly
            value={ productQuantity }
            data-testid={ `customer_products__input-card-quantity-${id}` }
            min="0"
          />
          <button
            className="button is-primary"
            type="button"
            onClick={ () => { quantityChange('minus'); } }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;
