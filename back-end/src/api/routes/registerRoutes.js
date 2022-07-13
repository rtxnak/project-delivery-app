const express = require('express');

const registerController = require('../controllers/registerController');
const { isValidPassword, isValidEmail, isValidName } = require('../middlewares/loginValidation');

const registerRoute = express.Router();

registerRoute
  .post('/',
    isValidPassword,
    isValidEmail,
    isValidName,
    registerController.register);

module.exports = registerRoute;