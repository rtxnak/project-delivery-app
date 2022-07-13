const express = require('express');

const sellerController = require('../controllers/sellerController');

const sellerRoute = express.Router();

sellerRoute
  .post('/orders',
  sellerController.getAllSales);

module.exports = sellerRoute;