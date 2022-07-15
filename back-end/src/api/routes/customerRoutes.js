const express = require('express');

const productController = require('../controllers/productController');
const customerController = require('../controllers/customerController');

const customerRoute = express.Router();

customerRoute
  .get('/products', productController.read)
  .get('/products/:id', productController.readOne)
  .post('/checkout', customerController.createSale)
  .post('/checkout/orders', customerController.getAllSales)
  .get('/checkout/orders/:id', customerController.findSale)
  .put('/checkout/orders/:id', customerController.updateSaleStatus);

module.exports = {
  customerRoute,
};
