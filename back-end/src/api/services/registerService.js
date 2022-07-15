const md5 = require('md5');
const { Op } = require('sequelize');
const { users } = require('../../database/models');
const { tokenGeneratorCreate } = require('../utils/tokenGenerator');

const create = async (name, email, role, password) => {
  const user = await users.findOne({
    where: {
      [Op.or]: [
        { name },
        { email },
      ],
    },
  });

  if (user) {
    return {
      code: 409,
      message: 'user already exist',
    };
  }

  const hashPassword = md5(password);
  const { id } = await users.create({ email, role, password: hashPassword, name });
  const token = tokenGeneratorCreate(role);

  return { code: 201, content: { id, name, email, role, token } };
};

module.exports = {
  create,
};