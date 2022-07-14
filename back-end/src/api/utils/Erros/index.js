const BadRequest = require('./BadRequest');
const Conflict = require('./Conflict');
const ErrorBase = require('./ErrorBase');
const NotFound = require('./NotFound');
const Unauthorized = require('./Unauthorized');

module.exports = {
  ErrorBase,
  Conflict,
  BadRequest,
  NotFound,
  Unauthorized,
};
