const ErrorBase = require('./ErrorBase');

class Conflict extends ErrorBase {
  constructor(message = 'Conflict Error') {
    super(409, message);
  }
}

module.exports = Conflict;
