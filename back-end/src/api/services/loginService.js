const md5 = require('md5');
const { users } = require('../../database/models');
const { tokenGeneratorCreate } = require('../utils/tokenGenerator');

const login = async (email, password) => {
  const user = await users.findOne({ where: { email } });

  if (user === null) {
    return {
      code: 404,
      message: 'invalid fields',
    };
  }

  if (user.password !== md5(password)) {
    return {
      code: 404,
      message: 'invalid fields',
    };
  }
  const { id, name, role } = user;
  const token = tokenGeneratorCreate(role);
  return { code: 200, content: { id, name, email, role, token } };
};

module.exports = {
  login,
};