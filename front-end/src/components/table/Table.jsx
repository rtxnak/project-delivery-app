import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonCheckout from '../button/checkout/ButtonCheckout';

function Table({
  productsInStore,
  removeItenInListProducts,
  idIndex,
  idName,
  idQuantity,
  idPrice,
  idSubTotal,
  idTotalPrice,
  fullPrice,
}) {
  const [isRender, setIsRender] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/customer/checkout') { setIsRender(true); }
  }, [location.pathname]);

  return (
    <div className="container">
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            {isRender && <th> Remover Item</th>}
          </tr>
        </thead>
        <tbody className="tbody">
          {
            productsInStore.map(({ id, name, price, quantity }, index) => {
              const totalPrice = Number(price) * quantity;
              return (
                <tr
                  className="tr"
                  key={ id }
                >
                  <td
                    className="td"
                    data-testid={
                      `${idIndex}${index}`
                    }
                  >
                    {index + 1}
                  </td>
                  <td
                    data-testid={
                      `${idName}${index}`
                    }
                  >
                    {name}
                  </td>
                  <td
                    className="qnt-itens"
                    data-testid={
                      `${idQuantity}${index}`
                    }
                  >
                    {quantity}
                  </td>
                  <td
                    className="unit-total"
                    data-testid={
                      `${idPrice}${index}`
                    }
                  >
                    {Number(price).toLocaleString('pt-BR',
                      { style: 'currency', currency: 'BRL' })}
                  </td>
                  <td
                    className="subtotal"
                    data-testid={
                      `${idSubTotal}${index}`
                    }
                  >
                    {totalPrice.toLocaleString('pt-BR',
                      { style: 'currency', currency: 'BRL' })}
                  </td>
                  <td id="td">
                    {
                      isRender
                    && <ButtonCheckout
                      id={ id }
                      removeItenInListProducts={ removeItenInListProducts }
                      index={ index }
                    />
                    }
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <p data-testid={ idTotalPrice } className="total-price">
        {
          `Total: ${fullPrice.toLocaleString('pt-BR',
            { style: 'currency', currency: 'BRL' })}`
        }
      </p>
    </div>
  );
}

Table.propTypes = {
  productsInStore: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  removeItenInListProducts: PropTypes.func.isRequired,
  idIndex: PropTypes.string.isRequired,
  idName: PropTypes.string.isRequired,
  idQuantity: PropTypes.string.isRequired,
  idPrice: PropTypes.string.isRequired,
  idSubTotal: PropTypes.string.isRequired,
  idTotalPrice: PropTypes.string.isRequired,
  fullPrice: PropTypes.number.isRequired,
};

export default Table;
