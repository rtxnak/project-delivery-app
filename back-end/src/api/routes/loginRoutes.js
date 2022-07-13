const express = require('express');

const loginController = require('../controllers/loginController');
const { isValidPassword, isValidEmail } = require('../middlewares/loginValidation');

const loginRoute = express.Router();

loginRoute
  .post('/',
    isValidPassword,
    isValidEmail,
    loginController.login);

module.exports = loginRoute;