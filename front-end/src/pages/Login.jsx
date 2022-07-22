import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

export default function Login() {
  const navigate = useNavigate();

  const onLoginRedirection = (recoveredUser) => {
    if (recoveredUser) {
      if (recoveredUser.role === 'customer') {
        navigate('/customer/products');
      }
      if (recoveredUser.role === 'administrator') {
        navigate('/admin/manage');
      }
      if (recoveredUser.role === 'seller') {
        navigate('/seller/orders');
      }
    }
  };

  return (
    <div className="loginContainer">
      <LoginForm
        onLoginRedirection={ onLoginRedirection }
      />
    </div>
  );
}
