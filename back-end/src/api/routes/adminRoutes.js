const express = require('express');

const adminController = require('../controllers/adminController');

const adminRoute = express.Router();

adminRoute
  .get('/',
  adminController.admin)
  .post('/',
    isValidPassword,
    isValidEmail,
    isValidName,
    registerController.register)
  .delete('/:id');

module.exports = {
  adminRoute,
};