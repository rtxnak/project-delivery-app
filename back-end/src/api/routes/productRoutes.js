const express = require('express');

const productController = require('../controllers/productController');
const { isValidNewProduct } = require('../middlewares/productValidation');

const productRoute = express.Router();

productRoute
  .post('/',
  isValidNewProduct, productController.create)
  .get('/', 
    productController.read)
  .get('/:id',
    productController.readOne)
  .put('/:id',
    productController.update)
  .delete('/:id',
    productController.destroy);

module.exports = {
  productRoute,
};
