const express = require('express');
const loginRoute = require('./loginRoutes');
const registerRoute = require('./registerRoutes');
const sellerRoute = require('./sellerRoutes');

const routes = express.Router();

routes.use('/login', loginRoute);
routes.use('/register', registerRoute);
routes.use('/seller', sellerRoute);

module.exports = routes;