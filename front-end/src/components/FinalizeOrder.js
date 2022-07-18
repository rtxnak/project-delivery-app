import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeProduct } from '../redux/actions/productActions';
import dataTestIds from '../utils/dataTestIds';
import http from '../services/apiServices';
// import '../styles/FinalizeOrder.css';

const FinalizeOrder = ({ sellers, total, products }) => {
  const initialValues = {
    sellerId: sellers[0].id,
    deliveryAddress: '',
    deliveryNumber: '',
    status: 'Pendente',
    totalPrice: total,
  };

  const dispatch = useDispatch();

  const { token, email } = (JSON.parse(localStorage.getItem('user')) || '');

  const [values, setValues] = useState(initialValues);

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  async function onSubmit(event) {
    event.preventDefault();
    const productsToSend = products.map(({ id, quantity }) => ({ id, quantity }));
    const { id } = await http
      .postSale({ values, email, token, products: productsToSend });

    dispatch(removeProduct([]));
    navigate(`/customer/orders/${id}`);
  }

  return (
    <div className="form-container">
      <h3>Detalhes e Endereço para Entrega</h3>
      <form onSubmit={ onSubmit }>
        <div className="input-container">
          <label htmlFor="seller">
            P. Vendedora Responsável:
            <select
              name="sellerId"
              id="seller"
              data-testid={ `${dataTestIds[29]}` }
              onChange={ handleChange }
              required
            >
              {
                sellers.map(({ id, name }) => (
                  <option key={ id } value={ id }>{name}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="deliveryAddress">
            Endereço:
            <input
              type="text"
              id="deliveryAddress"
              name="deliveryAddress"
              data-testid={ `${dataTestIds[30]}` }
              onChange={ handleChange }
              required
              minLength="1"
              maxLength="100"
            />
          </label>
          <label htmlFor="deliveryNumber">
            Número:
            <input
              type="number"
              id="deliveryNumber"
              data-testid={ `${dataTestIds[31]}` }
              name="deliveryNumber"
              onChange={ handleChange }
              required
              pattern="^[0-9]"
              min="1"
            />
          </label>
          <button
            type="submit"
            data-testid={ `${dataTestIds[32]}` }
          >
            Finalizar Pedido
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinalizeOrder;

FinalizeOrder.propTypes = {
  sellers: PropTypes.arrayOf(PropTypes.shape).isRequired,
  total: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
