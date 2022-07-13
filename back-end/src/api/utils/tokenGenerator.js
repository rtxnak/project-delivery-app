const jwt = require('jsonwebtoken');

const JWT_SECRET = 'secret_key';

const tokenGeneratorCreate = (data) => jwt.sign({ data }, JWT_SECRET, { expiresIn: '7d' });

const tokenGeneratorDecode = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  tokenGeneratorCreate,
  tokenGeneratorDecode,
};
