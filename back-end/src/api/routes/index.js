const express = require('express');
const loginRoute = require('./loginRoutes');
const registerRoute = require('./registerRoutes');
const sellerRoute = require('./sellerRoutes');
const adminRoute = require('./adminRoutes');

const routes = express.Router();

routes.use('/login', loginRoute);
routes.use('/register', registerRoute);
routes.use('/seller', sellerRoute);
routes.use('/admin/manage', adminRoute);

module.exports = routes;