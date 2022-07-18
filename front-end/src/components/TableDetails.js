import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';
// import '../styles/ProductsTable.css';

import dataTestIds from '../utils/dataTestIds';

const tableColumns = ['Item', 'Descrição', 'Qtd.', 'Valor Unitário', 'Sub-total'];

const TableDetails = ({ saleProducts }) => {
  const { Products } = saleProducts;
  const location = useLocation();
  const { id } = useParams();

  const SELLER_URL = `seller/orders/${id}`;
  const sellerRoute = () => location.pathname === SELLER_URL;

  const fillLine = ({ name, SalesProducts, price }, index) => (
    <tr key={ index }>
      <td
        data-testid={ sellerRoute()
          ? `${dataTestIds[59]}${index}`
          : `${dataTestIds[41]}${index}` }
      >
        {SalesProducts.product_id}
      </td>
      <td
        data-testid={ sellerRoute()
          ? `${dataTestIds[60]}${index}`
          : `${dataTestIds[42]}${index}` }
      >
        {name}
      </td>
      <td
        data-testid={ sellerRoute()
          ? `${dataTestIds[61]}${index}`
          : `${dataTestIds[43]}${index}` }
      >
        {SalesProducts.quantity}
      </td>
      <td
        data-testid={ sellerRoute()
          ? `${dataTestIds[62]}${index}`
          : `${dataTestIds[44]}${index}` }
      >
        {price}
      </td>
      <td
        className="tbl-customer-seller"
        data-testid={ sellerRoute()
          ? `${dataTestIds[63]}${index}`
          : `${dataTestIds[45]}${index}` }
      >
        R$
        {(parseFloat(SalesProducts.quantity * price).toFixed(2).replace('.', ','))}
      </td>
    </tr>
  );

  if (sellerRoute()) {
    return (
      <div className="tbl-container">
        <table>
          <thead>
            <tr>
              { tableColumns.map((column, index) => <th key={ index }>{ column }</th>) }
            </tr>
          </thead>
          <tbody>
            { Products.map((product, index) => fillLine(product, index)) }
          </tbody>
        </table>
      </div>);
  }

  return (
    <div className="tbl-container">
      <table>
        <thead>
          <tr>
            { tableColumns.map((column, index) => <th key={ index }>{ column }</th>) }
          </tr>
        </thead>
        <tbody>
          { Products.map((product, index) => fillLine(product, index)) }
        </tbody>
      </table>
    </div>
  );
};

TableDetails.propTypes = {
  saleProducts: PropTypes.shape({
    Products: PropTypes.arrayOf(PropTypes.shape).isRequired,
  }).isRequired,
};

export default TableDetails;
