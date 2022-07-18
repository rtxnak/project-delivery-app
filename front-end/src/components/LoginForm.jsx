import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';

export default function LoginForm() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', { email, password });
    login(email, password);
  };

  const checkInputs = () => {
    const minCaracters = 6;
    const validate = /\S+@\S+\.\S+/.test(email);
    if (validate && password.length >= minCaracters) { return false; }
    return true;
  };

  return (
    <div className="formBox">
      <form onSubmit={ handleSubmit }>
        <div className="field">
          <label htmlFor="loginInput">
            Login
            <input
              data-testid="common_login__input-email"
              className="input"
              id="loginInput"
              name="email"
              type="email"
              placeholder="email@trybeer.com.br"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="passwordInput">
            Senha
            <input
              data-testid="common_login__input-password"
              className="input"
              id="passwordInput"
              name="password"
              type="password"
              placeholder="******"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
            />
          </label>
        </div>
        <div className="buttons">
          <button
            data-testid="common_login__button-login"
            type="submit"
            className="button is-success"
            id="loginButton"
            disabled={ checkInputs() }
          >
            LOGIN
          </button>
        </div>
        <div className="buttons">
          <Link to="/register">
            <button
              data-testid="common_login__button-register"
              type="button"
              className="button is-ghost"
              id="newUserBtn"
            >
              Ainda não tenho conta
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
