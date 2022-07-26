import React from 'react';
import PropTypes from 'prop-types';

function CheckoutInput({
  setUserAddress,
  setNumberAddress,
  userAddress,
  userNumberAddress,
  allSellers,
  sellerSelected,
  setSellerSelected,
}) {
  const handleSellectSeller = ({ target }) => {
    setSellerSelected(Number(target.value));
  };

  const handleUserAddres = ({ value }) => {
    setUserAddress(value);
  };

  const handleNumberAddres = ({ value }) => {
    setNumberAddress(Number(value));
  };
  return (
    <>
      <td>
        <label htmlFor="p-vendedora">
          <h2>P. Vendedora Responsável</h2>
          <select
            className="input"
            id="p-vendedora"
            data-testid="customer_checkout__select-seller"
            value={ sellerSelected }
            onClick={ handleSellectSeller }
          >
            { allSellers.length > 0 && allSellers.map((seller) => (
              <option
                key={ `vendedor${seller.id}` }
                value={ seller.id }
              >
                { seller.name }
              </option>
            )) }
          </select>
        </label>
      </td>
      <td>
        <label htmlFor="address">
          <h2>Endereço</h2>
          <input
            className="input"
            id="address"
            data-testid="customer_checkout__input-address"
            type="text"
            placeholder="Seu endereço"
            value={ userAddress }
            onChange={ (e) => handleUserAddres(e.target) }
          />
        </label>
      </td>
      <td>
        <label htmlFor="numberAddress">
          <h2>Número</h2>
          <input
            className="input"
            id="numberAddress"
            data-testid="customer_checkout__input-addressNumber"
            type="number"
            placeholder="Seu numero"
            value={ userNumberAddress }
            onChange={ (e) => handleNumberAddres(e.target) }
          />
        </label>
      </td>
    </>
  );
}

CheckoutInput.propTypes = {
  sellerSelected: PropTypes.number.isRequired,
  setSellerSelected: PropTypes.func.isRequired,
  setNumberAddress: PropTypes.func.isRequired,
  setUserAddress: PropTypes.func.isRequired,
  userAddress: PropTypes.string.isRequired,
  userNumberAddress: PropTypes.string.isRequired,
  allSellers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  })).isRequired,
};

export default CheckoutInput;
