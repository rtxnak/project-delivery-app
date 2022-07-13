const express = require('express');
const loginRoute = require('./loginRoutes');

const routes = express.Router();

routes.use('/login', loginRoute);

module.exports = routes;