const express = require('express');
const loginRoute = require('./loginRoutes');
const productRoute = require('./productRoutes');

const routes = express.Router();

routes.use('/login', loginRoute);
routes.use('/products', productRoute);

module.exports = routes;