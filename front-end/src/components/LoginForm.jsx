import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';

export default function LoginForm({ onLoginRedirection }) {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidLogin, setInvalidLogin] = useState(false);
  const recoveredUser = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    onLoginRedirection(recoveredUser);
  }, [invalidLogin, onLoginRedirection, recoveredUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    const ERRORCODE = 404;
    if (result === ERRORCODE) {
      setInvalidLogin(true);
    }
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
        {invalidLogin ? (
          <div>
            <p
              data-testid="common_login__element-invalid-email"
            >
              Login Inválido
            </p>
          </div>
        ) : false}
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

LoginForm.propTypes = {
  onLoginRedirection: PropTypes.func.isRequired,
};
