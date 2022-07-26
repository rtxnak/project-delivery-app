import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { createNewSale } from '../../../services/api';
import { AuthContext } from '../../../context/auth';

export default function ButtonFinalizar({
  title,
  testId,
  totalPrice,
  sellerId,
  deliveryAddress,
  deliveryNumber,
  userId,
  productSalesArray,
}) {
  const { setCartItens } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleFinish = async () => {
    const obj = {
      totalPrice,
      sellerId,
      deliveryAddress,
      deliveryNumber,
      userId,
      productSalesArray,
    };
    const { token } = JSON.parse(localStorage.getItem('user'));
    const { result } = await createNewSale(obj, token);
    setCartItens([]);
    navigate(`/customer/orders/${result}`);
  };

  const handleDisabled = () => {
    const haveItems = productSalesArray.length !== 0;
    const haveNumber = deliveryNumber !== '';
    const haveAddress = deliveryAddress.length > 0;
    if (haveItems && haveNumber && haveAddress) {
      return false;
    } return true;
  };

  return (
    <div id="button-finalizar">
      <button
        className="btn-checkout"
        disabled={ handleDisabled() }
        type="button"
        data-testid={ testId }
        onClick={ handleFinish }
      >
        {title}
      </button>
    </div>
  );
}

ButtonFinalizar.propTypes = {
  title: PropTypes.string,
  testId: PropTypes.string,
  link: PropTypes.string,
  totalPrice: PropTypes.number,
  sellerId: PropTypes.number,
  deliveryAddress: PropTypes.string,
  deliveryNumber: PropTypes.number,
  userId: PropTypes.number,
  productSalesArray: PropTypes.arrayOf(PropTypes.shape()),
}.isRequired;
