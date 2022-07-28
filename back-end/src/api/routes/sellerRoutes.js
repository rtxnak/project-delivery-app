const express = require('express');

const sellerController = require('../controllers/sellerController');

const sellerRoute = express.Router();

sellerRoute
  .get('/orders/:id',
    sellerController.findSale)
  .post('/orders',
      sellerController.getAllSales)
  .put('/orders',
    sellerController.updateSaleStatus);

module.exports = sellerRoute;