import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewUserForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const checkInputs = () => {
    const MIN_LENGTH_PASSWORD = 6;
    if (email.includes('@') && email.includes('.com')
    && password.length > MIN_LENGTH_PASSWORD
    && name !== '') return false;
    return true;
  };

  return (
    <div className="loginContainer">
      <div className="formBox">
        <div className="field">
          <label htmlFor="loginInput">
            Nome
            <input
              data-test-id="common_register__input-name"
              className="input"
              id="loginInput"
              type="text"
              placeholder="Seu nome"
              onChange={ ({ target: { value } }) => setName(value) }
              value={ name }
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="loginInput">
            Email
            <input
              data-test-id="common_register__input-email"
              className="input"
              id="loginInput"
              type="email"
              placeholder="seu-email@site.com.br"
              onChange={ ({ target: { value } }) => setEmail(value) }
              value={ email }
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="loginInput">
            Senha
            <input
              data-test-id="common_register__input-password"
              id="loginInput"
              className="input"
              type="password"
              placeholder="*******"
              onChange={ ({ target: { value } }) => setPassword(value) }
              value={ password }
            />
          </label>
        </div>
        <div className="buttons">
          <Link
            to="/login"
          >
            <button
              data-test-id="common_register__button-register"
              type="button"
              className="button is-success"
              id="loginButton"
              disabled={ checkInputs() }
            >
              CADASTRAR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
