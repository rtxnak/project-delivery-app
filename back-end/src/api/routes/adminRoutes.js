const express = require('express');

const registerController = require('../controllers/registerController');
const { isValidPassword, isValidEmail, isValidName } = require('../middlewares/loginValidation');
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
  .delete('/:id',
  adminController.deleteUser,
  );

module.exports = {
  adminRoute,
};