import React, { useState } from "react";

export default function AddUser() {
  return (
    <div className="loginContainer">
      <div className="formBox">
      <label htmlFor="loginInput">Nome</label>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input 
              class="input" 
              id='loginInput' 
              type="text" 
              placeholder="Seu nome" 
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
        <label htmlFor="loginInput">Email</label>
          <p class="control has-icons-left has-icons-right">
            <input 
              class="input" 
              id='loginInput' 
              type="email" 
              placeholder="seu-email@site.com.br" 
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
        <label htmlFor="loginInput">Senha</label>
          <p class="control has-icons-left">
            <input
              id='loginInput' 
              class="input" 
              type="password" 
              placeholder="*******" 
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="buttons">
          <button 
            class="button is-success" 
            id='loginButton'
          >
            CADASTRAR
          </button>
        </div>
    </div>
  </div>    
  )
}
