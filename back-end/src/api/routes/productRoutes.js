const express = require('express');

const productController = require('../controllers/productController');
const customerController = require('../controllers/customerController');
const { isValidNameProduct } = require('../middlewares/productValidation');

const productRoute = express.Router();

productRoute
  .post('/',
    isValidNameProduct, productController.create)
  .get('/', 
    productController.read)
  .get('/:id',
    productController.readOne)
  .put('/:id',
    productController.update)
  .delete('/:id',
    productController.destroy);

const customerRoute = express.Router();

customerRoute
  .get('/products', productController.read)
  .get('/products/:id', productController.readOne)
  .post('/checkout', customerController.createSale);

module.exports = {
  productRoute,
  customerRoute,
};
