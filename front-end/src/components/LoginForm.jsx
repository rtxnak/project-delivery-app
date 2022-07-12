import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);

  const checkInputs = () => {
    const MIN_LENGTH_PASSWORD = 6;
    if (email.includes('@') && email.includes('.com')
    && password.length > MIN_LENGTH_PASSWORD) return false;
    return true;
  };

  const handleButtonClick = () => {
    setLogged(true);
  };

  return (
    <div className="formBox">
      {
        logged && <Navigate to="/customer" />
      }
      <div className="field">
        <label htmlFor="loginInput">
          Login
          <input
            className="input"
            id="loginInput"
            type="email"
            placeholder="email@trybeer.com.br"
            onChange={ ({ target: { value } }) => setEmail(value) }
            value={ email }
          />
        </label>
      </div>
      <div className="field">
        <label htmlFor="passwordInput">
          Senha
          <input
            className="input"
            id="passwordInput"
            type="password"
            placeholder="******"
            onChange={ ({ target: { value } }) => setPassword(value) }
            value={ password }
          />
        </label>
      </div>
      <div className="buttons">
        <button
          type="button"
          className="button is-success"
          id="loginButton"
          disabled={ checkInputs() }
          onClick={ handleButtonClick }
        >
          LOGIN
        </button>
      </div>
      <div className="buttons">
        <Link
          to="/register"
        >
          <button
            type="button"
            className="button is-ghost"
            id="newUserBtn"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </div>
    </div>
  );
}
