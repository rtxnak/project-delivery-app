const express = require('express');
const loginRoute = require('./loginRoutes');
const registerRoute = require('./registerRoutes');
const sellerRoute = require('./sellerRoutes');
const { customerRoute } = require('./customerRoutes');
// const { productRoute } = require('./productRoutes');

const routes = express.Router();

routes.use('/login', loginRoute);
routes.use('/register', registerRoute);
routes.use('/seller', sellerRoute);
routes.use('/customer', customerRoute);
// routes.use('/products', productRoute);

module.exports = routes;
