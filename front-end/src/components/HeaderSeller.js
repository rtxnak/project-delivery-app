import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import dataTestIds from '../utils/dataTestIds';
// import '../styles/HeaderStyles.css';
import logo from '../images/DEV.png';
import logoff from '../images/logoff.png';
import orders from '../images/orders.png';

function HeaderSeller() {
  const { current: { name } } = useRef(JSON.parse(localStorage.getItem('user') || ''));
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleChange({ name: buttonName }) {
    if (buttonName === 'login') localStorage.removeItem('user');
    return navigate(`/${buttonName}`);
  }

  function classDefine(iconType) {
    return `icon ${iconType}Seller ${pathname.includes(iconType) ? 'selected' : ''}`;
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
          d="M440 120 H200 V340 C240 340 280 340 280 250 L280 240 C280 240 280 200 320
            200 C400 200 440 160 440 120"
        />
      </svg>
      <img className="logo" src={ logo } alt="Logo da página - DEV em branco" />
      <div className="navIcons">
        <button
          className={ classDefine('orders') }
          data-testid={ dataTestIds[12] }
          name="seller/orders"
          onClick={ ({ target }) => handleChange(target) }
          type="button"
        >
          <img
            alt="Botão para ir para a página de pedidos"
            className="iconImg"
            name="seller/orders"
            src={ orders }
          />
          <span className="hidden">PEDIDOS</span>
        </button>
      </div>
      <button
        className="icon logoffSeller"
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
    </>
  );
}

export default HeaderSeller;
