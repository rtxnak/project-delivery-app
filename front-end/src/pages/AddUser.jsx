import React from 'react';

export default function AddUser() {
  return (
    <div className="loginContainer">
      <div className="formBox">
        <div className="field">
          <label htmlFor="loginInput">
            Nome
            <input
              className="input"
              id="loginInput"
              type="text"
              placeholder="Seu nome"
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="loginInput">
            Email
            <input
              className="input"
              id="loginInput"
              type="email"
              placeholder="seu-email@site.com.br"
            />
          </label>
        </div>
        <div className="field">
          <label htmlFor="loginInput">
            Senha
            <input
              id="loginInput"
              className="input"
              type="password"
              placeholder="*******"
            />
          </label>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="button is-success"
            id="loginButton"
          >
            CADASTRAR
          </button>
        </div>
      </div>
    </div>
  );
}
