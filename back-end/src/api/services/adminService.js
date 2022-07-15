const { Users } = require('../../database/models');

const getAllUsers = async () => {
  const allUsers = await Users.findAll();

  return allUsers;
};

const deleteUser = async (id) => {

  const userEmail = await Users.findByPk(id);
  if (userEmail) {
    await Users.destroy({
      where: {
        email: userEmail.email,
      }
    });
    return {
      code: 200,
      message: 'User deleted',
    }
  };

  return {
    code: 404,
    message: 'invalid fields',
  }
};

module.exports = {
  getAllUsers,
  deleteUser,
}