const express = require('express');
const loginRoute = require('./loginRoutes');
const registerRoute = require('./registerRoutes');
const sellerRoute = require('./sellerRoutes');
const { productRoute, customerRoute } = require('./productRoutes');

const routes = express.Router();

routes.use('/login', loginRoute);
routes.use('/register', registerRoute);
routes.use('/seller', sellerRoute);
routes.use('/products', productRoute);
routes.use('/customer', customerRoute);

module.exports = routes;
