const { users } = require('../../database/models');

const getAllUsers = async () => {
  const allUsers = await users.findAll();
  return allUsers;
};

const deleteUser = async (id) => {
  const userEmail = await users.findByPk(id);
  if (userEmail) {
    await users.destroy({
      where: {
        email: userEmail.email,
      },
    });
    return {
      code: 200,
      message: 'User deleted',
    };
  }

  return {
    code: 404,
    message: 'invalid fields',
  };
};

module.exports = {
  getAllUsers,
  deleteUser,
};