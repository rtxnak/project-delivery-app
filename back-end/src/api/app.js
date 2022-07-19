const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);
app.use('/images', express.static('public'));

module.exports = app;
