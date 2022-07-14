const ErrorBase = require('./ErrorBase');

class BadRequest extends ErrorBase {
  constructor(message = 'Bad Request Error') {
    super(400, message);
  }
}

module.exports = BadRequest;
