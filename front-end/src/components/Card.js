import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, removeProduct } from '../redux/actions/productActions';
import testIds from '../utils/dataTestIds';
// import '../styles/ProductCards.css';

const Card = ({ id, thumb, name, price }) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.products);
  const { products } = store;
  const [inputValue, setInputValue] = useState(0);
  const [suit, setSuit] = useState(false);
  const [cardInfo, setCardInfo] = useState(
    {
      id,
      name,
      quantity: 0,
      totalValue: '',
      price: parseFloat(price),
    },
  );

  const inputControl = ({ value }) => {
    setSuit(true);
    setInputValue(parseInt(value, 10));
  };

  const handleChange = (btnName) => {
    if (btnName === 'addButton') {
      setInputValue(inputValue + 1);
    } else if (inputValue > 0) setInputValue(inputValue - 1);
    setSuit(true);
  };

  useEffect(() => {
    const arrayPos = products.findIndex((p) => p.id === id);
    if (arrayPos >= 0) {
      setInputValue(products[arrayPos].quantity);
      setCardInfo(products[arrayPos]);
    }
  }, []);

  useEffect(() => {
    if (suit) {
      const totalValue = parseFloat((inputValue * cardInfo.price).toFixed(2));
      const quantity = inputValue;

      setCardInfo({ ...cardInfo, quantity, totalValue });
    }
  }, [inputValue]);

  useEffect(() => {
    if (suit) {
      if (inputValue === 0) {
        return dispatch(removeProduct(products.filter((p) => p.id !== id)));
      }
      dispatch(updateProduct({ ...cardInfo }));
    }
  }, [cardInfo]);

  return (
    <div
      className="product-card"
    >
      <img
        data-testid={ `${testIds[17]}${id}` }
        src={ thumb }
        alt={ `Uma garrafa de ${name}` }
        className="thumb"
      />
      <div
        className="product-info"
      >
        <h3
          className="price-product"
          data-testid={ `${testIds[16]}${id}` }
        >
          { `R$ ${price.replace('.', ',')}` }
        </h3>
        <h4
          className="product-name"
          data-testid={ `${testIds[15]}${id}` }
        >
          { name }
        </h4>

      </div>
      <div className="qty-container">
        <button
          className="qty-plus-button"
          value={ price }
          type="button"
          onClick={ (e) => handleChange(e.target.name) }
          id={ id }
          data-testid={ `${testIds[18]}${id}` }
          name="addButton"
        >
          +
        </button>
        <input
          className="qty-input"
          name="inputQuantity"
          id={ id }
          value={ inputValue }
          onChange={ (e) => setInputValue(e.target.value) }
          onKeyPress={ (e) => inputControl(e.target) }
          type="number"
          data-testid={ `${testIds[20]}${id}` }
        />
        <button
          className="qty-minus-button"
          id={ id }
          value={ price }
          type="button"
          onClick={ (e) => handleChange(e.target.name) }
          data-testid={ `${testIds[19]}${id}` }
          name="subButton"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
