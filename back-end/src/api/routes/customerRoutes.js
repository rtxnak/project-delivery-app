const express = require('express');

const productController = require('../controllers/productController');
const customerController = require('../controllers/customerController');
const { userAuthorization } = require('../middlewares/authorizeToken');

const customerRoute = express.Router();

customerRoute
  .get('/products', productController.read)
  .get('/products/:id', productController.readOne)
  .post('/checkout', userAuthorization, customerController.createSale)
  .post('/checkout/orders', customerController.getAllSales)
  .get('/checkout/orders/:id', customerController.findSale)
  .put('/checkout/orders/:id', customerController.updateSaleStatus);

module.exports = {
  customerRoute,
};
