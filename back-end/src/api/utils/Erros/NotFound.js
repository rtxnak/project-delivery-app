const ErrorBase = require('./ErrorBase');

class NotFound extends ErrorBase {
  constructor(message = 'NotFound Error') {
    super(404, message);
  }
}

module.exports = NotFound;