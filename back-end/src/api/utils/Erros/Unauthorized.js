const ErrorBase = require('./ErrorBase');

class Unauthorized extends ErrorBase {
  constructor(message = 'Unauthorized Error') {
    super(401, message);
  }
}

module.exports = Unauthorized;
