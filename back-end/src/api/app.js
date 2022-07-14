const express = require('express');
const routes = require('./routes/index');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use(routes);

module.exports = app;
