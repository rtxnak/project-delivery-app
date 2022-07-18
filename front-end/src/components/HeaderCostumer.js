import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import dataTestIds from '../utils/dataTestIds';
// import '../styles/HeaderStyles.css';
import logo from '../images/DEV.png';
import logoff from '../images/logoff.png';
import orders from '../images/orders.png';
import productsImg from '../images/products.png';
import cart from '../images/cart.png';

function HeaderCostumer() {
  const { current: { name } } = useRef(JSON.parse(localStorage.getItem('user') || ''));
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const role = pathname.split('/')[1];
  const { products } = useSelector((state) => state.products);
  const productsQty = products
    .reduce((acc, { totalValue }) => (totalValue ? acc + 1 : acc), 0);

  function handleChange({ name: buttonName }) {
    if (buttonName === 'login') localStorage.removeItem('user');
    return navigate(`/${buttonName}`);
  }

  function classDefine(pageType) {
    return `icon ${pageType} ${pathname.includes(pageType) ? 'selected' : ''}`;
  }

  function isSeller() {
    return (role === 'seller');
  }

  return (
    <>
      <div
        className="userName"
        data-testid={ dataTestIds[13] }
      >
        <p
          className="user"
        >
          { name }
        </p>
      </div>
      <svg className="headerBack" height="480" width="440">
        <path
          d="M400 120 H200 V480 C280 480 280 440 280 240 C280 240 280 200 320 200 C400
          200 440 160 440 120"
        />
      </svg>
      <img className="logo" src={ logo } alt="Logo da página - DEV em branco" />
      <div className="navIcons">
        <button
          className={ classDefine('products') }
          data-testid={ dataTestIds[11] }
          disabled={ isSeller() }
          name={ `${role}/products` }
          onClick={ ({ target }) => handleChange(target) }
          type="button"
        >
          <img
            alt="Botão para ir para a página de produtos"
            className="iconImg"
            name={ `${role}/products` }
            src={ productsImg }
          />
          <span className="hidden">PRODUTOS</span>
        </button>
        <button
          className={ classDefine('checkout') }
          disabled={ productsQty === 0 || isSeller() }
          name={ `${role}/checkout` }
          onClick={ ({ target }) => handleChange(target) }
          type="button"
        >
          <img
            alt="Botão para ir para a página de checkout"
            className="iconImg"
            name={ `${role}/checkout` }
            src={ cart }
          />
          <span className="hidden">CARRINHO</span>
        </button>
        <button
          className={ classDefine('orders') }
          data-testid={ dataTestIds[12] }
          name={ `${role}/orders` }
          onClick={ ({ target }) => handleChange(target) }
          type="button"
        >
          <img
            alt="Botão para ir para a página de pedidos"
            className="iconImg"
            name={ `${role}/orders` }
            src={ orders }
          />
          <span className="hidden">PEDIDOS</span>
        </button>
        <button
          className="icon logoff"
          data-testid={ dataTestIds[14] }
          name="login"
          onClick={ ({ target }) => handleChange(target) }
          type="button"
        >
          <img
            alt="Botão para fazer Log-Off"
            className="iconImg"
            name="login"
            src={ logoff }
          />
          <span className="hidden">Sair</span>
        </button>
      </div>
      <p className={ `productsQty ${productsQty && !isSeller() ? '' : 'noOpacity'}` }>
        { productsQty }
      </p>
    </>
  );
}

export default HeaderCostumer;
