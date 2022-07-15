const express = require('express');

const sellerController = require('../controllers/sellerController');

const sellerRoute = express.Router();

sellerRoute
  .post('/orders',
  sellerController.getAllSales)
  .put('/orders',
  sellerController.updateSaleStatus);

module.exports = sellerRoute;