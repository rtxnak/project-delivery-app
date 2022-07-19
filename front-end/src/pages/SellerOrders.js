import React, { useEffect, useState } from 'react';
import { CardOrders } from '../components'; import Header from '../components/Header';
import http from '../services/apiServices';
// import '../styles/cardOrders.css';

function SellerOrders() {
  const [sales, setSales] = useState('');
  const [loading, setLoading] = useState(true);

  const getSellerData = async () => {
    const user = await JSON.parse(localStorage.getItem('user')); return user;
  };

  const loadingSales = async () => {
    const userData = await getSellerData();
    const salesList = await http.getSales(userData);
    setSales(salesList);
    setLoading(false);
  };

  useEffect(() => { loadingSales(); }, []);

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div className="content">
      <Header />
      <div className="container-card-order">
        { sales.map((sale) => <CardOrders sale={ sale } key={ sale.id } />) }
      </div>
    </div>
  );
}

export default SellerOrders;
