const express = require('express');

const productController = require('../controllers/productController');

const productRoute = express.Router();

productRoute
  .post('/',
    productController.create)
      .get('/', 
        productController.read)
          .get('/:id',
            productController.readOne)
        .put('/:id',
      productController.update)
    .delete('/:id',
  productController.destroy);

module.exports = productRoute;