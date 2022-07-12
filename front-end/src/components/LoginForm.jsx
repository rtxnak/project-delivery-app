import React, { useState }from "react";
import { Link, Navigate } from "react-router-dom";

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
      <label htmlFor="loginInput">Login</label>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input 
            class="input" 
            id='loginInput' 
            type="email" 
            placeholder="email@trybeer.com.br"
            onChange={ ({ target: { value } }) => setEmail(value) }
            value={ email }
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
        <label htmlFor="passwordInput">Senha</label>
        <p class="control has-icons-left">
          <input 
            class="input" 
            id='passwordInput' 
            type="password"
            placeholder="******"
            onChange={ ({ target: { value } }) => setPassword(value) }
            value={ password }
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
          disabled={ checkInputs() }
          onClick={ handleButtonClick }
        >
          LOGIN
        </button>
      </div>
      <div class="buttons">
      <Link
        to="/register"
      > 
        <button 
          class="button is-ghost" 
          id='newUserBtn'
        >
          Ainda não tenho conta 
        </button>
      </Link>
      </div>
    </div>
  )
}
