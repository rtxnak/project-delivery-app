import React, { useState, useContext } from 'react';
import { api } from '../services/api';
import { AuthContext } from '../context/auth';

export default function NewUserForm() {
  const { login } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [failed, setfailed] = useState(true);

  const checkInputs = () => {
    const minPassword = 6;
    const minUserName = 12;
    if (
      userEmail.includes('@')
      && userEmail.includes('.com')
      && userPassword.length >= minPassword
      && userName.length >= minUserName
    ) {
      return false;
    }
    return true;
  };

  const userSaved = 201;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: userName,
      email: userEmail,
      password: userPassword,
      role: 'customer',
    };
    try {
      const response = await api.post('/register', data);
      console.log(response);
      if (response.status === userSaved) {
        login(userEmail, userPassword);
      }
    } catch (error) {
      setfailed(false);
      setUserEmail('');
      setUserName('');
      setUserPassword('');
    }
  };

  return (
    <div className="formBox">
      <form onSubmit={ handleSubmit }>
        <div className="field">
          <label htmlFor="loginInput">
            Nome
            <input
              data-testid="common_register__input-name"
              className="input"
              id="loginInput"
              type="text"
              placeholder="Seu nome"
              onChange={ (e) => setUserName(e.target.value) }
              value={ userName }
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="loginInput">
            Email
            <input
              data-testid="common_register__input-email"
              className="input"
              id="loginInput"
              type="email"
              placeholder="seu-email@site.com.br"
              onChange={ (e) => setUserEmail(e.target.value) }
              value={ userEmail }
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="loginInput">
            Senha
            <input
              data-testid="common_register__input-password"
              id="loginInput"
              className="input"
              type="password"
              placeholder="*******"
              onChange={ (e) => setUserPassword(e.target.value) }
              value={ userPassword }
            />
          </label>
        </div>
        <div className="buttons">
          <button
            data-testid="common_register__button-register"
            type="submit"
            className="button is-success"
            id="loginButton"
            disabled={ checkInputs() }
          >
            CADASTRAR
          </button>
        </div>
        <div className="hide" data-testid="common_register__element-invalid_register">
          { failed ? null : <p>ERRO!!! Usuário já cadastrado</p> }
        </div>
      </form>
    </div>
  );
}
